# Make Change API

This api is designed to take a currency amount in dollars and cents and return how many of what denominations are needed to make proper change. 

The api is deployed here - 

~~frosty-glade-1979.fly.dev/xxx.xx~~ 

https://damp-lake-327.fly.dev/xx.xxx

Simply replace the x's with numbers and the API will return JSON containing how many bills of what denomination is required to make change for that amount. 

Enjoy! 


First Major Hurdle - https for the server! 

Apple doesn't allow network calls to http, and will most likely block a server with a self signed certificate. For my use case, I decided to deploy my server on fly.io. I have it up and running with the secure protocol! While I had given myself most of today to accomplish that, I find myself with more time to add a little more pizzaz to the front end! 
