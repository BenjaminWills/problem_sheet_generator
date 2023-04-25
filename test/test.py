import requests

URL = "http://127.0.0.1:5000/download?=n-problems=5&topic=complex-analysis"


def download_file(url):
    local_filename = "problems.zip"
    # NOTE the stream=True parameter below
    with requests.get(url, stream=True) as r:
        r.raise_for_status()
        with open(local_filename, "wb") as f:
            for chunk in r.iter_content(chunk_size=8192):
                # If you have chunk encoded response uncomment if
                # and set chunk_size parameter to None.
                # if chunk:
                f.write(chunk)
    return local_filename


if __name__ == "__main__":
    download_file(URL)
