import re
#we need regex to decode ma guy
import json
#we using aura things like nlp
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
#since the skillset homies are written in a json file
with open('skills.json','r') as f:
    skills_data=json.load(f)
#we making all lowkey tuples
all_skills=[]
for category in skills_data['skills']:
    cat_name=category['category']
    for skill in category['sub_skills']:
        all_skills.append((skill.lower(),cat_name))
#extract all sub skills and optionally the categories are saved as tupple too
#for match making
def match_skills(text):
    text=text.lower()
    matched=[]
    seen=set()
    for skill, category in all_skills:
        pattern=r'\b' + re.escape(skill)+r'\b'
        #for exact matching
        if re.search(pattern,text) and skill not in seen:
            matched.append((skill,category))
            seen.add(skill)
    return matched
#NLP USING TFDIF AND COSINE(MATHS AHHHHHHHHHHHHHHHH)
def compute_similarity(resume_text,job_list):
    #create a list of resume and descrip
    docs=[resume_text]+[job['description']for job in job_list]
    #create tf-idf vector more ml ahh
    tfdif=TfidfVectorizer().fit_transform(docs)
    #cosine similarity of resume are checked wrt to jpb
    scores=cosine_similarity(tfdif[0:1],tfdif[1:]).flatten()

    matches=[]
    for i,job in enumerate(job_list):
        matches.append({
            'job':job,
            'score':float(scores[i])#making sure json can understand the brainrot
        })
        #sort wrt to aura
    matches.sort(key=lambda x:x['score'],reverse=True)
    return matches


if __name__ == "__main__":
    sample_resume_text = """
    Experienced software developer with skills in Python, JavaScript, React, and machine learning.
    Familiar with AWS, Docker, and Kubernetes. Also have knowledge in SQL and NoSQL databases like MongoDB.
    """
    sample_jobs = [
        {
            'title': 'Backend Dev',
            'company': 'CoolTech',
            'description': 'Looking for devs skilled in Python, Flask, SQL, and Docker.'
        },
        {
            'title': 'Frontend Dev',
            'company': 'ShinyUI',
            'description': 'React, JavaScript, HTML, and CSS ninjas needed.'
        }
    ]
    print("\n>>> Skill-based Match:")
    print(match_skills(sample_resume_text))
    print("\n>>> NLP-based Match:")
    results=compute_similarity(sample_resume_text, sample_jobs)
    for m in results:
        print(f"{m['job']['title']} @ {m['job']['company']} --> score: {m['score']:.2f}")
