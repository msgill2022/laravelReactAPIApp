# Installation 

    ## After downloading the folder.Run the following commands.
        composer install
        npm install
        npm build 

    ## For database setup:

        ### Rename the .env.example folder and update that file according to your requirements or
            if you wants to use sqlite just rename the .env.copy file.

        ### To generate App key run the following command.
            php artisan key:generate

        ### Run following command
            php artisan migrate

            When system ask you Would you like to create it? (yes/no) [no]
            yes

        ### Seed the database with following command
            php artisan db:seed

        ### To start the serve run the following command.Server will run on localhost:8000
             php artisan serve

# Available Routes
        # To get current user detail
            api/v1/users/{id}
        
        # To get latest saved location
            api/v1/users/current
        
        # To GET all locations  
            api/v1/users/{user_id}/locations
            method: GET
       
        # To save the current locations
            api/v1/users/{user_id}/locations
            method: POST 
            data_format {user_id:integer, latitude:float, longitude:float} all fields required
       
        # To retrieve the given locations
            api/v1/users/{user_id}/locations/{location_id}
            method: GET

        # To edit the given locations
            api/v1/users/{user_id}/locations/{location_id}
            method: PUT 
            data_format {user_id:integer, latitude:float, longitude:float} all fields required
        
        # To delete the given locations
            api/v1/users/{user_id}/locations/{location_id}
            method: DELETE

#Development
        # Backend server is power by laravel.
        # Frontend server is power by react.

        # To development server's run following commands
            php artisan serve  (for laravel server)
            npm run dev        (for auto loading with vita)

#Dependencies
        #Backend 
            laravel,composer,php and mysql

        #Frontend
            tailwindcss,axios and react 
               
            
#Data
        #when you run php artisan db:seed laravel add
            3 users and each user has 10 locations.
        # for locations run following command
            php artisan db:seed --class = LocationSeeder

        
#ForTesting
        # to run test
            php artisan test
 