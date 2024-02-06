from flask import render_template, request, redirect, url_for, flash , Blueprint, session ,jsonify
from functools import wraps
from werkzeug.utils import secure_filename
from . import db  
import sqlite3
from .models import  Lawyer , Rating , Admin , Appointment


import os
from .models import  Lawyer , Rating , Admin , Appointment
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/')
def index():
    return "Welcome to DZ-Mouhami Web Directory!"


def login_required(role):
    def decorator(func):
        @wraps(func)
        def decorated_function(*args, **kwargs):
            if 'user_id' not in session and 'admin_id' not in session:
                flash('Please log in to access this page', 'danger')
                return redirect(url_for('auth.login'))
            
            if 'user_id' in session and role == 'lawyer':
                user_id = session['user_id']
                user = Lawyer.query.get(user_id)
                if user:
                    return func(*args, **kwargs)
                else:
                    flash('You do not have access to this page', 'danger')
                    return redirect(url_for('auth.login'))
            
            if 'user_id' in session and role == 'admin':
                return func(*args, **kwargs)
            
            flash('You do not have access to this page', 'danger')
            return redirect(url_for('auth.login'))
        
        return decorated_function

    return decorator




@auth_bp.route('/register', methods=['GET', 'POST'])

def register():
    print("Request Method:", request.method)
    if request.method == 'POST':
       
        first_name = request.form.get('first_name')
        last_name = request.form.get('last_name')
        email = request.form.get('email')
        specialty = request.form.get('specialty')
        about = request.form.get('about')
        languages = request.form.get('languages')
        address = request.form.get('address')
        wilaya = request.form.get('wilaya')
        experiences = request.form.get('experiences')
        phone_number = request.form.get('phone_number')
        password = request.form.get('password')
        confirm_password = request.form.get('confirm_password')
        print("Form Data:", request.form)
       
        existing_lawyer = Lawyer.query.filter_by(email=email).first()
        if existing_lawyer:
            print('Email already registered')
            return redirect(url_for('auth.register'))

        if password != confirm_password:
            flash('Passwords do not match')
            return redirect(url_for('auth.register'))

        new_lawyer = Lawyer(
            firstName=first_name,
            lastName=last_name,
            email=email,
            speciality=specialty,
            about=about,
            languages=languages,
            address=address,
            wilaya=wilaya,
            experiences=experiences,
            phoneNumber=phone_number,
            status='pending',
            role='lawyer'
        )

       
        if 'photo' in request.files:
            photo = request.files['photo']
            if photo.filename != '' and allowed_file(photo.filename):
                filename = secure_filename(photo.filename)
                photo.save(os.path.join('uploads', filename))
                new_lawyer.photo = filename

      
        new_lawyer.set_password(password)

        try:
            db.session.add(new_lawyer)
            db.session.commit()
            response = new_lawyer.id
        except Exception as e:
            print(e)

        flash('Registration successful. Your account is pending approval from the admin.', 'success')
        return redirect(url_for('auth.index'))

    return ('added lawyer')
    

    
@auth_bp.route('/admindash')
def admindash():
    # Query pending lawyers from the database
    pending_lawyers = Lawyer.query.filter_by(status='pending')
    
    # Transform the result to a list of dictionaries
    lawyer_ratings = [
        {
            "id": lawyer.id,
            "name": lawyer.firstName,
            "speciality": lawyer.speciality,
            "wilaya": lawyer.wilaya,
            "status": lawyer.status
        }
        for lawyer in pending_lawyers
    ]
    print(lawyer_ratings)

    return jsonify(lawyer_ratings)

@auth_bp.route('/admin/approve/<int:lawyer_id>')
@login_required(role='admin')
def approve_lawyer(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)
    lawyer.status = 'approved'
    db.session.commit()
    flash(f'The registration for {lawyer.firstName} {lawyer.lastName} has been approved.', 'success')
    return redirect(url_for('auth.admindash'))

@auth_bp.route('/admin/refuse/<int:lawyer_id>')
@login_required(role='admin')
def refuse_lawyer(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)
    db.session.delete(lawyer)
    db.session.commit()
    flash(f'The registration for {lawyer.firstName} {lawyer.lastName} has been refused.', 'danger')
    return redirect(url_for('auth.admindash'))
@auth_bp.route('/admin/lawyers')
@login_required(role='admin')
def admin_lawyers():
    lawyers = Lawyer.query.filter_by(status='approved').all()
    return render_template('admin_lawyers.html', lawyers=lawyers)
@auth_bp.route('/admin/delete/<int:lawyer_id>', methods=['post'])
@login_required(role='admin')
def delete_lawyer(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)
    db.session.delete(lawyer)
    db.session.commit()
    flash(f'The lawyer {lawyer.firstName} {lawyer.lastName} has been deleted.', 'danger')
    return redirect(url_for('auth.admin_lawyers'))
@auth_bp.route('/admin/lawyer/<int:lawyer_id>', methods=['GET', 'POST'])
@login_required(role='admin')
def lawyer_details(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)

    if request.method == 'POST':
        action = request.form.get('action')  # Assuming you have a form field named 'action'

        if action == 'accept':
            lawyer.status = 'approved'
            db.session.commit()
            flash(f'The registration for {lawyer.firstName} {lawyer.lastName} has been approved.', 'success')
            return redirect(url_for('auth.admindash'))
        elif action == 'refuse':
            db.session.delete(lawyer)
            db.session.commit()
            flash(f'The registration for {lawyer.firstName} {lawyer.lastName} has been refused.', 'danger')
            return redirect(url_for('auth.admindash'))

    return render_template('lawyer_details.html', lawyer=lawyer)





@auth_bp.route('/login', methods=['GET', 'POST' , 'OPTIONS'])
def login():
    if request.method == 'POST':

        session.clear()
        data = request.get_json()
        email = data.get('email')
        password = data.get('password')
        print(email)
        existing_lawyer = Lawyer.query.filter_by(email=email).first()
        admin = Admin.query.filter_by(email=email).first()
        print("Existing lawyer:", existing_lawyer)

        #if existing_lawyer and existing_lawyer.check_password(password):
            #session['user_id'] = existing_lawyer.id
            #session['role'] = existing_lawyer.role
            #print(session)
            #return redirect(url_for('auth.profile'))
        
        if existing_lawyer and existing_lawyer.check_password(password):
            session['user_id'] = existing_lawyer.id
            session['role'] = 'lawyer'
            session['lawyer_email'] = existing_lawyer.email  # Store additional info (e.g., email) in the session
            return jsonify({'success': True, 'message': 'Login successful'})

        elif admin and admin.check_password(password):
            session.clear()
            session['user_id'] = admin.id
            session['role'] = admin.role
            flash('Login successful', 'success')
            print("Session data after login (admin):", session)
            return redirect(url_for('auth.admindash'))

    return render_template('login.html')



@auth_bp.route('/profile/<int:user_id>')

def profile(user_id):
    #current_user_id = session.get('user_id')

    # Check if the logged-in user matches the requested user
    #if current_user_id is None or current_user_id != user_id:
        #flash('You do not have access to this page', 'danger')
        #return redirect(url_for('auth.login'))

    #role = session.get('role')
    #if role == 'lawyer':
    user = Lawyer.query.get(user_id)
    et = Rating.query.filter_by(lawyer_id=user_id).all()
        
    if user:
        return jsonify({
            'id': user.id,
        'nom': user.firstName,
        'wilaya': user.wilaya,
        'specialites': user.speciality,
        'adresse': user.address,
        'numero': user.phoneNumber,
        'langues': user.languages,
        'photo': user.photo,
        'about': user.about,
        'etoiles': et.count(Rating.rating)
            })
    else:
        flash('User not found', 'danger')
        return redirect(url_for('main.index'))
    #elif role == 'admin':
    #return render_template('admindash.html')  # Add a separate template for admin profile
    #else:
        #flash('You do not have access to this page', 'danger')
        #return redirect(url_for('auth.login'))


    
    
@auth_bp.route('/logout' , methods=['POST'])
@login_required(role='lawyer')
def logout():
    session.pop('user_id', None)
    session.pop('role', None)
    flash('You have been logged out', 'info')

    return redirect(url_for('auth.index'))




@auth_bp.route('/admin/ratings', methods=['GET'])

def admin_ratings():
    print("Received request for admin_ratings")
    ratings = Rating.query.filter_by(status='pending').all()
    lawyer_ratings = [
        {
            
            "lawyer": comment.fullName,
            "title": comment.email,
            "status": comment.status
        }
        for comment in ratings
    ]
    print(lawyer_ratings)

    return jsonify(lawyer_ratings)  
    


@auth_bp.route('/admin/rating/<int:rating_id>', methods=['GET'])
@login_required(role='admin')
def rating_details(rating_id):
    # Retrieve the rating from the database
    rating = Rating.query.get_or_404(rating_id)

    # Render the template with rating details
    return render_template('rating_details.html', rating=rating)

# Route to accept ratings
@auth_bp.route('/admin/rating/<int:rating_id>/accept', methods=['POST'])
@login_required(role='admin')
def accept_rating(rating_id):
    # Retrieve the rating from the database
    rating = Rating.query.get_or_404(rating_id)

    # Update the status of the rating to 'accepted'
    rating.status = 'accepted'
    db.session.commit()

    # Flash a success message
    flash('The rating has been accepted.', 'success')

    # Redirect to the admin ratings page
    return redirect(url_for('auth.admin_ratings'))

# Route to delete ratings
@auth_bp.route('/admin/rating/<int:rating_id>/delete', methods=['POST'])
@login_required(role='admin')
def delete_rating(rating_id):
    # Retrieve the rating from the database
    rating = Rating.query.get_or_404(rating_id)

    # Delete the rating from the database
    db.session.delete(rating)
    db.session.commit()

    # Flash a success message
    flash('The rating has been deleted.', 'danger')

    # Redirect to the admin ratings page
    return redirect(url_for('auth.admin_ratings'))








@auth_bp.route('/appointments/<int:lawyer_id>/create', methods=['GET', 'POST'])
def create_appointment(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)

    if request.method == 'POST':
        user_name = request.form.get('user_name')
        user_email = request.form.get('user_email')
        user_phone = request.form.get('user_phone')
        appointment_date = request.form.get('appointment_date')
        appointment_time = request.form.get('appointment_time')
        

        if Appointment.query.filter_by(lawyer_id=lawyer.id, appointment_date=appointment_date, appointment_time=appointment_time).first():
            flash('This time slot is already booked. Please choose another time.', 'danger')
        else:

            appointment = Appointment(
                lawyer_id=lawyer.id,
                user_name=user_name,
                user_email=user_email,
                user_phone=user_phone,
                appointment_date=appointment_date,
                appointment_time=appointment_time,
                status='pending'
            )

            db.session.add(appointment)
            db.session.commit()

            flash('Appointment created successfully. Pending confirmation from the lawyer.', 'success')

            
            return redirect(url_for('auth.appointment_details', appointment_id=appointment.id))

    return render_template('create_appointment.html', lawyer=lawyer)





@auth_bp.route('/appointments/<int:lawyer_id>')
@login_required(role='lawyer')
def lawyer_appointments(lawyer_id):
    lawyer = Lawyer.query.get_or_404(lawyer_id)
    appointments = Appointment.query.filter_by(lawyer_id=lawyer.id).all()
    return render_template('lawyer_appointments.html', lawyer=lawyer, appointments=appointments)

@auth_bp.route('/appointments/<int:appointment_id>/details')
@login_required(role='lawyer')
def appointment_details(appointment_id):
    appointment = Appointment.query.get_or_404(appointment_id)
    return render_template('appointment_details.html', appointment=appointment)




@auth_bp.route('/appointments/<int:appointment_id>/confirm')
@login_required(role='lawyer')
def confirm_appointment(appointment_id):
    appointment = Appointment.query.get_or_404(appointment_id)
    appointment.status = 'accepted'
    db.session.commit()


    flash('Appointment confirmed successfully. User notified.', 'success')
    return redirect(url_for('auth.appointment_details', appointment_id=appointment.id))



#delete appointment
@auth_bp.route('/appointments/<int:appointment_id>/delete')
@login_required(role='lawyer')
def delete_appointment(appointment_id):
    appointment = Appointment.query.get_or_404(appointment_id)
    db.session.delete(appointment)
    db.session.commit()

    # Notify user via email (implement email sending logic here)

    flash('Appointment deleted successfully. User notified.', 'success')
    return redirect(url_for('auth.lawyer_appointments', lawyer_id=appointment.lawyer.id))


@auth_bp.route('/recherche', methods=['POST'])
def recherche():
    if request.method == "POST":
        data = request.json  
        wilaya = data.get('wilaya')
        address = data.get('address')
        languages = data.get('languages')
        print(wilaya)
        query = Lawyer.query

        if wilaya:
            query = query.filter(Lawyer.wilaya == wilaya)
        if address:
            query = query.filter(Lawyer.address == address)
        if languages:
            query = query.filter(Lawyer.speciality == languages)

        result = query.all()

        serialized_result = [
            {'firstName':lawyer.firstName,'wilaya': lawyer.wilaya, 'address': lawyer.address, 'languages': lawyer.languages}
            for lawyer in result
        ]

        return jsonify({'lawyers': serialized_result})
    else:
        return jsonify({'error': 'Invalid HTTP method'})




#commentaire
def creer_table_commentaires():
    conn = sqlite3.connect('lawyer.db')
    cur = conn.cursor()

    cur.execute("""CREATE TABLE IF NOT EXISTS commentaires (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    lawyer_id INTEGER,
                    firstName TEXT,
                    email TEXT,
                    comment TEXT,
                    rating TEXT
                )""")
    
    conn.commit()
    conn.close()

def ajouter_commentaire(lawyer_id, firstName, email, comment, rating):
    conn = sqlite3.connect('lawyer.db')
    cur = conn.cursor()

    cur.execute("""INSERT INTO commentaires (lawyer_id, firstName, email, comment, rating)
                   VALUES (?, ?, ?, ?, ?)""", (lawyer_id, firstName, email, comment, rating))

    conn.commit()
    conn.close()


def afficher_commentaires_lawyer(id_lawyer):
    conn = sqlite3.connect('lawyer.db')
    cur = conn.cursor()

    
    cur.execute("SELECT * FROM commentaires WHERE lawyer_id=?", (id_lawyer,))
    commentaires = cur.fetchall()
    print(commentaires)
    conn.close()
    return render_template("commentaire.html", commentaires=commentaires)

@auth_bp.route("/commentaire/<int:id_lawyer>", methods=['GET', 'POST'])
def enregistrer_commentaires(id_lawyer):
    creer_table_commentaires()

    
    commentaires_existants = afficher_commentaires_lawyer(id_lawyer=id_lawyer)

    if request.method == "POST":
        donnees = request.form
        firstName = donnees.get('firstName')
        email = donnees.get('email')
        comment = donnees.get('comment')
        rating = donnees.get('rating')

        
        ajouter_commentaire(id_lawyer, firstName, email, comment, rating)

        
        confirmation = {
            'firstName': firstName,
            'email': email,
            'comment': comment,
            'rating': rating
        }

        
        return render_template("commentaire.html", confirmation=confirmation, id_lawyer=id_lawyer, commentaires_existants=commentaires_existants)

    return render_template("commentaire.html", id_lawyer=id_lawyer, commentaires_existants=commentaires_existants)
