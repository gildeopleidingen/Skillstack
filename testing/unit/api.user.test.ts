import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "../../src/app/api/user/route";

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
