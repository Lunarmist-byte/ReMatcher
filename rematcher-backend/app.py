#what's up, another billion libraries gonna be imported here fr fr
import flask
from flask import Flask, request, jsonify
#no dev has made nothing in python without flask and a damn server
from resume_parser import extract_from_pdf_py
#calling ma homie resumeparser.py fr
from matcher import compute_similarity
import os
import json
#we have the gods here now, please provide me resource and json(he is happy to be included)
app=Flask(__name__)#main character enters
JOBS_FILE='jobs.json'

UPLOAD_FOLDER="uploads" #put your resumes for my dumb code here
os.makedirs(UPLOAD_FOLDER,exist_ok=True)#if no folder creates a place for dropping those lies
last_resume_text=None#we going global boyss
#now we make a apiendpoint to upload to the MNC gods(if they want this shitty ahh code)
@app.route('/upload',methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error':"Upload something gng, can't be ghosting "}),400

    file=request.files['file']
    file_type=request.form.get('file_type','resume').lower()
    #if gng didn't ghost me we get the skibidi resume
    filepath=os.path.join(UPLOAD_FOLDER,file.filename)
    #file getting addressed fr
    file.save(filepath)
    #my boy be getting saved by the baddie os sheeeeeeeeeeeeesh
    text=extract_from_pdf_py(filepath)
    #bro be getting scanned by the baddie resumeparser
    if file_type =='resume':
        matched_skills=match_skills(text)
        return jsonify({'resume_text':text,
                    'matched_skills':matched_skills})
    elif file_type == 'job':
        #we be getting jobs gng
        job = {
            'title': request.form.get('title', 'No Title'),
            'company': request.form.get('company', 'No Company'),
            'description': text,
            'skills': [skill[0] for skill in match_skills(text)]  # list of skills from matcher
        }
        jobs=load_jobs()
        jobs.append(job)
        save_jobs(jobs)
        return jsonify({'message':'job added successfully','job':job})
    else:
        return jsonify({'error':"gng u fucked up, check if the on ethat u sent to be rizzed is a resume or job"}),400
#flask be getting turned on gng
def match_jobs():
    if 'last_resume_text' not in globals():
        return jsonify({'error':'No file gng'}),400
    jobs=load_jobs()
    matches=compute_similarity(last_resume_text,jobs)
    return jsonify({'matches':matches})
def load_jobs():
    if os.path.exists(JOBS_FILE):
        with open(JOBS_FILE,'r') as f:
            return json.load(f)
    return []
def save_jobs(jobs):
    with open(JOBS_FILE,'w') as f:
        json.dump(jobs,f,indent=4)
@app.route('/match',methods=['GET'])
if __name__=='__main__':
    app.run(debug=True)
    #if my boy fumbles we getting the stats
