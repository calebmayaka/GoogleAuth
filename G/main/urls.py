from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',views.home, name='homepage'),
    path('login/',views.login, name='loginpage'),
    path('signup/',views.signup, name='signupage'),
    path('base/',views.base,name='basetemplate'),
    path('about/',views.about, name='aboutpage'),
    path('contactus/',views.contact, name='contactus')
]
