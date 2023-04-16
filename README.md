# Screenshots

<p align="center">
  <img alt="Light" src="https://i.postimg.cc/qRm8xPxK/image.png" width="45%">&nbsp;
  <img alt="Dark" src="https://i.postimg.cc/Bnh2x9ZG/image.png" width="45%">
  <img alt="Login" src="https://i.postimg.cc/hG1v9V1Q/image.png" width="45%">&nbsp;
  <img alt="User" src="https://i.postimg.cc/QxG95Np7/image.png" width="45%">
  <img alt="Role" src="https://i.postimg.cc/k4zK6xc3/Screenshot-2023-03-20-at-18-23-22-Role-Inertia-Metronix.png" width="45%">&nbsp;
  <img alt="Permission" src="https://i.postimg.cc/mrxQg38v/image.png" width="45%">
  <img alt="Modal Form" src="https://i.postimg.cc/vTxTpkfC/Screenshot-2023-03-20-at-18-22-08-User-Inertia-Metronix.png" width="45%">&nbsp;
  <img alt="Modal Confirm" src="https://i.postimg.cc/brrkdmbR/Screenshot-2023-03-20-at-18-21-04-User-Inertia-Metronix.png" width="45%">
  
</p>

# Features

-   Role Based Access Control
-   Responsive Design
-   Modal Form
-   Bulk Action
-   Light/Dark Mode
-   Rich Feature Datatable Serverside
-   Localization (EN/ID)
-   SSR (Server Side Rendering)

# Requirements

-   Php 8
-   Composer
-   Mysql
-   Apache

# Installation

```bash
git clone https://github.com/sadikins/metronix.git
cd metronix
composer update
npm install
cp .env.example .env
php artisan key:generate

SETTING UP DB CONNECTION IN .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=metronix
DB_USERNAME=root
DB_PASSWORD=

php artisan migrate:fresh --seed

START THE SERVER
npm run dev
php artisan serve
```

## Login With

### Superadmin

```bash
email : superadmin@superadmin.com
password : superadmin
```

### Admin

```bash
email : admin@admin.com
password : admin
```

### Operator

```bash
email : operator@operator.com
password : operator
```

# Packages

-   [Vue](https://vuejs.org/)
-   [Inertia](https://inertiajs.com/)
-   [Bootstrap](https://getbootstrap.com/)
-   [Spatie](https://spatie.be/docs/laravel-permission/v5/introduction)
-   [Laravel Brive](https://github.com/erikwibowo/Laravel-Brive)
-   [Metronic Theme](https://keenthemes.com/metronic)

# Build With

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>
