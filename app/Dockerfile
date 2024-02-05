FROM python:3.8
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
expose 5000
CMD ["python3", "server.py"]