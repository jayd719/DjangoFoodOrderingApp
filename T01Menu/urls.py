from django.urls import path
from .views import *

urlpatterns = [
    path('',homepage,name="homepage" ),
    path("menu/",Menu.as_view(),name="menu"),
    path("srs/",srs_doc,name='srs'),
    path("bp/",bp_plan,name="bp"),
    path("your_name/",NameFormView.as_view(),name="nameform"),
    path("thanks/",success,name="success")
]
