/**
 *
 * @export
 * @interface BtcUTXO
 */
export interface BtcUTXO {
    /**
     * Version of the UTXO.
     * @type {number}
     * @memberof BtcUTXO
     */
    version?: number;
    /**
     *
     * @type {number}
     * @memberof BtcUTXO
     */
    height?: number;
    /**
     * Amount of UTXO in satoshis.
     * @type {number}
     * @memberof BtcUTXO
     */
    value?: number;
    /**
     * Data generated by a spender which is almost always used as variables to satisfy a pubkey script.
     * @type {string}
     * @memberof BtcUTXO
     */
    script?: string;
    /**
     * Address of the owner of the UTXO.
     * @type {string}
     * @memberof BtcUTXO
     */
    address?: string;
    /**
     * Coinbase transaction - miner fee.
     * @type {boolean}
     * @memberof BtcUTXO
     */
    coinbase?: boolean;
    /**
     * Transaction hash.
     * @type {string}
     * @memberof BtcUTXO
     */
    hash?: string;
    /**
     * Transaction index of the output.
     * @type {number}
     * @memberof BtcUTXO
     */
    index?: number;
}