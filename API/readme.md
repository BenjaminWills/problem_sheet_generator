# API docs

These are the docs for the problem generator API.

## Problem sheet downlad

The URL looks like:

```python
URL = "http://127.0.0.1:5001/download?n-problems=$5&topic=math&difficulty=hard&api-key=123456789"
```

Here we have a few URL arguments:

1. `n-problems` - This is the number of problems that you request in the problem sheet
2. `topic` - The topic that you wish the sheet to be on
3. `difficulty` - The difficulty of the sheet, this is rather arbritrary so be as detailed as you wish
4. `api-key` - This is reserved for your API key. If it is not entered then the requests will not go through