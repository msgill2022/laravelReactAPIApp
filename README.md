1. Installation 

a. After downloading the folder.Run the following commands.
    composer install
    npm install
    npm build 

b. For database setup:
    rename the .env.example folder and update that file according to your requirements or
    if you wants to use sqlite just rename the .env.copy file.
        When system ask you to create sql database : Enter yes in terminal.

c.  To generate App key run the following command.
    php artisan key:generate

d.  To start the serve run the following command.
    php artisan serve