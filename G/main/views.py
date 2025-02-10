from django.shortcuts import render, HttpResponse

def home(request):
    return render(request, 'main/home.html')

def login(request):
    return render(request,'main/login.html')

def signup(request):
    return render(request,'main/signup.html')

def base(request):
    return render(request,'main/base.html')

def about(request):
    return render(request, 'main/about.html')

def contact(request):
    return render(request, 'main/contact.html')

    
    