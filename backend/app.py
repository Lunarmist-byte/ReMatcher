#what's up, another billion libraries gonna be imported here fr fr
import flask
from flask import Flask, request, jsonify
#no dev has made nothing in python without flask and a damn server
from resume_parser import extract_from_pdf_py
#calling ma homie resumeparser.py fr
from matcher import match_skills
import os
#we have the gods here now, please provide me resource
app=Flask(__name__)#main character enters

UPLOAD_FOLDER="uploads" #put your resumes for my dumb code here
os.makedirs(UPLOAD_FOLDER,exist_ok=True)#if no folder creates a place for dropping those lies

#now we make a apiendpoint to upload to the MNC gods
@app.route('/upload',methods=['POST'])
def upload_resume():
    if 'resume' not in request.files:
        return jsonify({'error':"Upload something gng, can't be ghosting "}),400

    file=request.files['resume']
    #if gng didn't ghost me we get the skibidi resume
    filepath=os.path.join(UPLOAD_FOLDER,file.filename)
    #file getting addressed fr
    file.save(filepath)
    #my boy be getting saved by the baddie os sheeeeeeeeeeeeesh
    text=extract_from_pdf_py(filepath)
    #bro be getting scanned by the baddie resumeparser
    matched_skills=match_skills(text)
    return jsonify({'resume_text':text,
                    'matched_skills':matched_skills})
#flask be getting turned on gng
if __name__=='__main__':
    app.run(debug=True)
    #if my boy fumbles we getting the stats
