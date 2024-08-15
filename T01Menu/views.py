from django.shortcuts import render,HttpResponse

WEBPAGE_TITLE = "someone"

data = {
    'TITLE':WEBPAGE_TITLE,
}

def homepage(request):
    return render(request,"homepage.html",context=data)




def itemDetails(request,item_number):
    return HttpResponse(f'ItemNumber is: {item_number}')
