# timestamp-service

Timestamp microservice project. Accepts a Unix time or natural date parameter and returns both, or null if the parameter is invalid.

# User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

# Usage
* Natural Date
  * /February 1, 2015

* Unix Timestamp
  * /1422777600

#Output
```javascript
{"unix":1422777600,"natural":"February 1, 2015"}
```
