from django.shortcuts import render

def home(request):
    return render(request, 'MainAuth/home.html')

def login(request):
    return render(request, 'MainAuth/login.html')

def registration(request):
    return render(request, 'MainAuth/registration.html')
