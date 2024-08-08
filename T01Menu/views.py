from django.shortcuts import render
WEBPAGE_TITLE = "someone"

data = {
    'TITLE':WEBPAGE_TITLE,
}

def homepage(request):
    return render(request,"homepage.html",context=data)
# Create your views here.
