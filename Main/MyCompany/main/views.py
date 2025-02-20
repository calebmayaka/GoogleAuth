from django.shortcuts import render

# my homepage
def home(request):
    return render(request,'main/home.html')

def login(request):
    return render(request, 'main/login.html')

def registration(request):
    return render(request, 'main/registration.html')
