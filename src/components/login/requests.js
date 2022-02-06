const apiBaseUrl = "//ec2-54-161-136-170.compute-1.amazonaws.com:8082";

const login = (data) =>
  fetch(`${apiBaseUrl}/v1/api/user/login`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

const register = (data) =>
  fetch(`${apiBaseUrl}/v1/api/user/registration`, {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

const getClient = (token) =>
  fetch(`${apiBaseUrl}/v1/api/user/client`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export { login, register, getClient };
