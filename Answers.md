1.  Explain the differences between `client-side routing` and `server-side routing`.

        Client side routing- known as single page applications. Downloads entire application during initial load (initial load will be longer than server side), but speed when 
        retreiving data after initial load is very quick.  Examples are react, angular, vue.  New info is sent using AJAX call, Server responds back using JSON (templates ar already stored on SPA, while data is stored on Server).  Positives is the quick load time on the application after intial load.  Negative is initial load. 

        Server side routing- 
        Whole new html, JS, and or new CSS is sent to client from templates stored on Server, client only recieves the data they request, not all the data at once.  This may be beneficial for ecommerce or govenment sites that need quick initial load, or not storing too much info on the browser.  Negative is user has to reload every single part of page when a request is made, as entire DOM is "repainted".

1.  What does HTTP stand for?

    HTTP stands for HyperText Transfer Protocol.  Underlying protocol used by WWW and defines how messages are formatted and transmitted, & what actions Web servers and browsers should take in response to various commands.  

1.  What does CRUD stand for?

        CRUD-Create, Read, Update, Delete. 4 basic functions of persistent storage.  

1.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
                Create = PUT with a new URI
         POST =to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE 


1.  Mention three tools we can use to make AJAX requests

        jQuery, Fetch API, Axios 