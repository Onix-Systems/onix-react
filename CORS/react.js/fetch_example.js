const response = await fetch("https://api.request.com/api_resource", {
    method: "GET",
    mode: "cors",
    headers: {
        Authorization: `Bearer: ${token}`,
        "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
});

console.log(response.json());
