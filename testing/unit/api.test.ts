import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "../../src/app/api/user/route";

// Some env
const validEnv = {
        AUTH_SECRET: "test-secret",
        AUTH_GITHUB_ID: "github-client-id",
        AUTH_GITHUB_SECRET: "github-client-secret",
};

function setValidEnv() {
        process.env.AUTH_SECRET = validEnv.AUTH_SECRET;
        process.env.AUTH_GITHUB_ID = validEnv.AUTH_GITHUB_ID;
        process.env.AUTH_GITHUB_SECRET = validEnv.AUTH_GITHUB_SECRET;
}

// TODO move to general thing...
describe("auth configuration", () => {
        beforeEach(() => {
                vi.resetModules();

                delete process.env.AUTH_SECRET;
                delete process.env.AUTH_GITHUB_ID;
                delete process.env.AUTH_GITHUB_SECRET;
        });

        it("loads when all required environment variables exist", async () => {
                setValidEnv();

                const { env, authConfig } = await import("../../src/auth.config");

                expect(env).toEqual(validEnv);
                expect(authConfig.session).toEqual({
                        strategy: "jwt",
                });
                expect(authConfig.trustHost).toBe(true);
                expect(authConfig.providers).toHaveLength(1);
        });

        it.each(["AUTH_SECRET", "AUTH_GITHUB_ID", "AUTH_GITHUB_SECRET"])(
                "throws when %s is missing",
                async (missingKey) => {
                        setValidEnv();
                        delete process.env[missingKey];

                await expect(import("../../src/auth.config")).rejects.toThrow(
                `Missing required environment variable: ${missingKey}`,
                );
        });

        it.each(["AUTH_SECRET", "AUTH_GITHUB_ID", "AUTH_GITHUB_SECRET"])(
                "throws when %s is empty",
                async (emptyKey) => {
                        setValidEnv();
                        process.env[emptyKey] = "   ";

    await expect(import("../../src/auth.config")).rejects.toThrow(
      `Missing required environment variable: ${emptyKey}`,
    );
  });

const { mockQuery, mockAuth } = vi.hoisted(() => ({
  mockQuery: vi.fn(),
  mockAuth: vi.fn(),
}));

vi.mock("server-only", () => ({}));
vi.mock("@/lib/pool", () => ({
  pool: { query: mockQuery },
}));
vi.mock("@/auth", () => ({
  auth: mockAuth,
}));

beforeEach(() => {
  vi.clearAllMocks();
});


// API endpoint: /api/user
it("returns a list of users", async () => {
  mockAuth.mockResolvedValue({
    user: { id: "user-123" },
  });

  mockQuery.mockResolvedValue({
    rows: [
      { id: "user-123", name: "Student" },
      { id: "user-456", name: "Another student" },
    ],
  });

  const response = await GET();
  const body = await response.json();

  expect(response.status).toBe(200);
  expect(body).toEqual([
    { id: "user-123", name: "Student" },
    { id: "user-456", name: "Another student" },
  ]);
  expect(mockQuery).toHaveBeenCalled();
});
