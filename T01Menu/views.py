from django.shortcuts import render,HttpResponse
from T01Menu.models import MenuItem
from T01Menu.models import Category
from django.views import View



def homepage(request):
    return render(request,"homepage.html",context="data")




class Menu(View):
    template_name = "menu_page.html"    
    def get(self,request):
        data = {}
        for category in Category.choices:
            if category[0]!="U":
                data.update({category[1]:MenuItem.objects.filter(category=category[0])})

        return render(request,self.template_name,{"data":data})
