# Resume Matcher API

A backend REST API built with Flask that allows users to upload their resume PDF, extracts text content from the resume, and prepares the data for future skill matching and job recommendation features.

---

## Features

- Upload resume PDF via `/upload` endpoint
- Extracts text from PDF resumes using PyMuPDF
- Returns the extracted resume text in JSON format
- Clean, modular codebase to extend for skill extraction and job matching

---

## Project Structure

ReMatcher/
|── backend/
│ ├── app.py # Flask API server
│ ├── resume_parser.py # PDF text extraction logic
│ ├── requirements.txt # Python dependencies
├── README.md # Project overview and usage
├── .gitignore # Files/folders to ignore in git


---

## Setup Instructions

1. Clone the repo
git clone https://github.com/Lunarmist-byte/ReMatcher.git
cd ReMatcher/backend

2. Create A Virtual Enviornment
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

3. Install Requirements.txt
pip install -r requirements.txt

4. Running the API
python app.py
(default server at 127.0.0.1:5000)

How to Use
Send a POST request to /upload with form-data:
Key: resume
Value: Your PDF resume file
Example cURL (Windows PowerShell):
curl.exe -X POST http://127.0.0.1:5000/upload -F "resume=@C:/path/to/your/resume.pdf"
Response:
{
  "resume_text": "Extracted resume text here..."
}

Next Steps (Coming Soon)
Skill extraction from resume text
Job matching based on extracted skills
Frontend UI to upload and display results

License
This project is licensed under the MIT License.

Made with 💻 and ☕ by Lunarmist-byte
