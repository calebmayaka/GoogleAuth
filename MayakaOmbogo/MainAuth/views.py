from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import SignUpForm

def home(request):
    return render(request, 'MainAuth/home.html')

def login(request):
    return render(request, 'MainAuth/login.html')

def registration(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST, request.FILES)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Redirect to a home page or any other page
    else:
        form = SignUpForm()
    return render(request, 'MainAuth/registration.html', {'form': form})
