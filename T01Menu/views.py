from django.shortcuts import render,HttpResponse
from T01Menu.models import MenuItem
from T01Menu.models import Category
from django.views import View
from django.shortcuts import redirect


def redirect_(request):
    return redirect("/menu/")

def homepage(request):
    return render(request,"homepage.html",context="data")


def item_details(request,item_id):
    return HttpResponse(item_id)

def srs_doc(request):
    return render(request,'docs/srs.html')
def bp_plan(request):
    return render(request,'docs/bp.html')

class Menu(View):
    template_name = "menu_page.html"    
    def get(self,request):
        data = {}
        for category in Category.choices:
            if category[0]!="U":
                data.update({category[1]:MenuItem.objects.filter(category=category[0])})

        return render(request,self.template_name,{"data":data})
