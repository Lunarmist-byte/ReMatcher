# ReMatcher: Resume Matcher API

A backend REST API built with Flask that allows users to upload their resume PDF, extracts text content from the resume, and prepares the data for future skill matching and job recommendation features.

-----

## Features

  * **Upload Resume PDF:** Easily upload your resume PDF via the `/upload` endpoint.
  * **Text Extraction:** Extracts text from PDF resumes using the efficient PyMuPDF library.
  * **JSON Output:** Returns the extracted resume text in a clean JSON format.
  * **Modular Design:** Built with a clean, modular codebase, making it easy to extend for future skill extraction and job matching functionalities.
  * **Skill Matching:** Matches skills to the extarcted text using an inbuilt skills.json file(maybe implemented as a db in future according to purpose).
  * **Front End UI:** Front end UI is a react based one with a modular design
  * **Job Matching Login:** Job Matching based on NLP
-----
## Note
**This project is Untested and Not Finished atm**

## Project Structure

```
ReMatcher/
├── backend/
│   ├── app.py              # Flask API server
│   ├── resume_parser.py    # PDF text extraction logic
│   ├── requirements.txt    # Python dependencies
|   ├── matcher.py          # Matching skills from the resume
├── frontend/               #has a lot of frontend files
├── README.md               # Project overview and usage
├── .gitignore              # Files/folders to ignore in git
```

-----

## Setup Instructions

Follow these steps to get the API up and running on your local machine:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Lunarmist-byte/ReMatcher.git
    cd ReMatcher/backend
    ```

2.  **Create a Virtual Environment:**

    ```bash
    python -m venv venv
    ```

3.  **Activate the Virtual Environment:**

      * **Windows:**
        ```bash
        venv\Scripts\activate
        ```
      * **macOS/Linux:**
        ```bash
        source venv/bin/activate
        ```

4.  **Install Dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

5.  **Run the API:**

    ```bash
    python app.py
    ```

    The API will be running on `http://127.0.0.1:5000` by default.

-----

## How to Use

Send a `POST` request to the `/upload` endpoint with your PDF resume file as `form-data`.

  * **Key:** `resume`
  * **Value:** Your PDF resume file

### Example cURL (Windows PowerShell):

```powershell
curl.exe -X POST http://127.0.0.1:5000/upload -F "resume=@C:/path/to/your/resume.pdf"
```

### Response Example:

```json
{
  "resume_text": "Extracted resume text here..."
  "matched_skills": [
    [
      "python",
      "Programming Languages & Scripting"
    ],
}
```

-----

## Next Steps (Coming Soon\!)
  * Employer can add jobs
    
-----

## License

This project is licensed under the MIT License - see the `LICENSE` file (if you have one, otherwise consider adding it\!) for details.

-----

Made with 💻 and ☕ by [Lunarmist-byte](https://github.com/Lunarmist-byte)
