"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sha256Native = exports.sha256 = void 0;
const crypto_1 = require("crypto");
const libauth_1 = require("@bitauth/libauth");
/**
 * Calculate the sha256 digest of a string.
 *
 * ### Example (es imports)
 * ```js
 * import { sha256 } from 'typescript-starter'
 *
 * (async () => {
 *   console.log(await sha256('test'));
 *   // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * });
 * ```
 *
 * @param message - the string to hash
 * @returns sha256 message digest
 */
const sha256 = async (message) => {
    const sha256 = await libauth_1.instantiateSha256();
    return libauth_1.binToHex(sha256.hash(libauth_1.utf8ToBin(message)));
};
exports.sha256 = sha256;
/**
 * A synchronous implementation of `sha256` which uses the native Node.js
 * module. (Browser consumers should use the `sha256` method.)
 *
 * ### Example (es imports)
 * ```js
 * import { sha256Native as sha256 } from 'typescript-starter'
 * console.log(sha256('test'));
 * // => '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
 * ```
 * @param message - the string to hash
 * @returns sha256 message digest
 */
const sha256Native = (message) => {
    return crypto_1.createHash('sha256').update(message).digest('hex');
};
exports.sha256Native = sha256Native;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvaGFzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBb0M7QUFFcEMsOENBQTBFO0FBRTFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNJLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxPQUFlLEVBQUUsRUFBRTtJQUM5QyxNQUFNLE1BQU0sR0FBRyxNQUFNLDJCQUFpQixFQUFFLENBQUM7SUFDekMsT0FBTyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDO0FBSFcsUUFBQSxNQUFNLFVBR2pCO0FBRUY7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0ksTUFBTSxZQUFZLEdBQUcsQ0FBQyxPQUFlLEVBQUUsRUFBRTtJQUM5QyxPQUFPLG1CQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM1RCxDQUFDLENBQUM7QUFGVyxRQUFBLFlBQVksZ0JBRXZCIn0=