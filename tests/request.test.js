import request from "../lib/services/request";
describe("request", () => {
  test("should fail", async () => {
    await expect(request("blem")).rejects.toThrow("connect");
  });
  //   'https://jsonplaceholder.typicode.com/todos/1'

  test("should get data", async () => {
    const response = await request(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    expect(response).toBeTruthy();
  });
});
