from django.shortcuts import render
# from django.http import HttpResponse

# Create your views here.
def main_blog(request):
    context = {'like':range(10)}
    return render(request, 'main_blog/my_blog.html', context)

def about(request):
    return render (request, 'main_blog/about.html')