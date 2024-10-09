import { login } from "../utils/api";
import { users } from "../utils/_DATA";

describe("Test api call", () => {
	it("Should login success", async () => {
		let user = Object.values(users)[0];

		await expect(login(user.id, user.password)).resolves.toBe(user);
	});
	
	it("Should login failed", async () => {
		await expect(login("invalid", "invalid")).rejects.toBe(
			"Username or password incorrect!"
		);
	});
});
