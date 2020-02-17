1. Describe how you would make a line of text in a homepage section editable from theme customization.
* From your Shopify admin, in your theme editor go to Config > settings_schema.json
* Add: 
```
    {
    "name": "Homepage Text",
    "settings": [
      {
        "type": "text",
        "id": "text",
        "default": "Hello from the homepage",
        "label": "Homepage Text"
      }
    ]
  }
```
* Save your settings_schema.json file and refresh the browser to allow the settings_data.json file to load in your changes.
* Check the settings_data.json file and you should see a new key with the same name as the id that you set in the settings_schema.json file in this case it is "text"
* You can now access the "text" field in the global settings object by adding `{{settings.text}}` in the html tag that you want to target.
* While still in the editor click the Customize theme link under the purple header.
* Look for the "Homepage Text" button to open the text input and write the content you want to display.
* Click Save 


2. How would you add the collection featured image as a banner on the collection page?
 
* From your Shopify admin, go to Products > Collections.

* Click the name of the collection that you want to add or update.
    * If the collection doesn't have a featured image yet, then click Upload image to select an image.
     * If you're changing a collection's featured image, then click Change image to select a new image.
* Click Save.

3. Using liquid code and HTML, create a simple pagination container, "< 1 2 ... 5 >".

    ```
      {% if paginate.previous.is_link %}
          <a href="{{paginate.previous_url}}"> < </a>
      {% endif %}
      {% assign count = paginate.pages %}
        {% for part in (1..count) %}
            <li>
              <a href="{{ collection.url }}?page={{ forloop.index }}">{{ forloop.index }}</a>
            </li>
          {% endfor %}
       {% if paginate.next.is_link %}
          <a href="{{paginate.previous_url}}"> > </a>
      {% endif %}
    ```


4. Using liquid code, access the product named "Blue T-Shirt". Store the id, title, handle, price, url, and image in variables.
    ```
            {% assign blueShirtId = all_products["blue-t-shirt"].id %}
            {% assign blueShirtTitle = all_products["blue-t-shirt"].title %}
            {% assign blueShirtHandle = all_products["blue-t-shirt"].handle %}
            {% assign blueShirtPrice = all_products["blue-t-shirt"].price %}
            {% assign blueShirtUrl = all_products["blue-t-shirt"].url %}
            {% assign blueShirtImage = all_products["blue-t-shirt"].image %}
    ```
5. Using liquid code, create a key:value array using the list below. Loop through the array. Upon key type, store the value in a variable to be used later.
fruit:apple
vegetable:carrot
cloth:t-shirt
denim:jeans

    ```
    {% assign keys = "fruit,vegetable,cloth,denim" | split: ","  %}
    {% assign values = "apple,carrot,t-shirt,jeans" | split: "," %}
    {% for  key in keys %}
         {%if key == "fruit" %}
            {% assign fruit = values[forloop.index0] %}
		{% endif %}
         {%if key == "vegetable" %}
            {% assign vegetable = values[forloop.index0] %}
		{% endif %}
         {%if key == "cloth" %}
            {% assign cloth = values[forloop.index0] %}
		{% endif %}
         {%if key == "denim" %}
            {% assign denim = values[forloop.index0] %}
		{% endif %}
    {% endfor %}
    ```