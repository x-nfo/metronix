<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/svg+xml" href="{{ Vite::asset('favicon.svg') }}">
        <link rel="icon" type="image/ico" href="{{ Vite::asset('favicon.ico') }}">

        <title inertia>{{ config('app.name', 'Inertia Metronix') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet">

          <!-- Metronic -->
        <link href="{{Vite::asset('plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{Vite::asset('css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>


   <body id="kt_app_body"
        data-kt-app-layout="dark-sidebar"
        data-kt-app-header-fixed="true"
        data-kt-app-sidebar-enabled="true"
        data-kt-app-sidebar-fixed="true"
        data-kt-app-sidebar-hoverable="true"
        data-kt-app-sidebar-push-header="true"
        data-kt-app-sidebar-push-toolbar="true"
        data-kt-app-sidebar-push-footer="true"
        data-kt-app-toolbar-enabled="true"
        class="app-default">
    
       <!--begin::Theme mode setup on page load-->
        <script>
        var defaultThemeMode = "system";
        var themeMode;

        if ( document.documentElement ) {
            if ( document.documentElement.hasAttribute("data-bs-theme-mode")) {
                themeMode = document.documentElement.getAttribute("data-bs-theme-mode");
            } else {
                if ( localStorage.getItem("data-bs-theme") !== null ) {
                    themeMode = localStorage.getItem("data-bs-theme");
                } else {
                    themeMode = defaultThemeMode;
                }
            }

            if (themeMode === "system") {
                themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            }

            document.documentElement.setAttribute("data-bs-theme", themeMode);
        }
        </script>
        <!--end::Theme mode setup on page load-->



       @inertia

       <!--end::Loading markup-->
        <script src="{{Vite::asset('plugins/global/plugins.bundle.js')}}"></script>
        <script src="{{Vite::asset('js/scripts.bundle.js')}}"></script>
        <script src="{{Vite::asset('js/widgets.bundle.js')}}"></script>
		

    </body>
</html>
