import fitz
def extract_from_pdf_py(file_path):
    try:
        doc=fitz.open(file_path)
        text="".join(page.get_text() for page in doc)
        return text
    except Exception as e:
        return f"error parsing,get some help from the dumbass who coded this,send this too:{e}"
#avg python dev using billion libraries ahhh, basically we use some library called pymupdf to extract all the resume fluff(yeah peopel lying fr)and make it a string