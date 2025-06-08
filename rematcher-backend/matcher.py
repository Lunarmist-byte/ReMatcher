import re
#we need regex to decode ma guy
import json
#since the skillset homies are written in a json file
with open('skills.json','r') as f:
    skills_data=json.load(f)
#loads the file
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
    for skill, category in all_skills:
        pattern=r'\b' + re.escape(skill)+r'\b'
        #for exact matching
        if re.search(pattern,text) and skill not in seen:
            matched.append((skill,category))
            seen.add(skill)
    return matched
if __name__ == "__main__":
    sample_resume_text = """
    Experienced software developer with skills in Python, JavaScript, React, and machine learning.
    Familiar with AWS, Docker, and Kubernetes. Also have knowledge in SQL and NoSQL databases like MongoDB.
    """
        
    from matcher import match_skills 
        
    matched_skills = match_skills(sample_resume_text)
    print("Matched Skills:", matched_skills)
