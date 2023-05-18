using System;
using Libplanet.Blocks;

namespace Libplanet.Blockchain
{
    /// <summary>
    /// An exception thrown when a <see cref="BlockChain"/> have
    /// not calculated the complete states for all blocks but an operation
    /// is requested that requires the missing states.
    /// </summary>
    public class IncompleteBlockStatesException : Exception
    {
        /// <summary>
        /// Creates a new <see cref="IncompleteBlockStatesException"/> object.
        /// </summary>
        /// <param name="blockHash">Specifies <see cref="BlockHash"/>.
        /// It is automatically included in the <see cref="Exception.Message"/>
        /// string.</param>
        /// <param name="message">Specifies the <see cref="Exception.Message"/>.
        /// </param>
        public IncompleteBlockStatesException(
            BlockHash blockHash,
            string? message = null)
            : base(
                message is null
                    ? $"The block {blockHash} lacks its states"
                    : $"{message}\nThe Block that lacks its states: {blockHash}")
        {
            BlockHash = blockHash;
        }

        /// <summary>
        /// The <see cref="Block.Hash"/> of <see cref="Block"/> that
        /// a <see cref="BlockChain"/> lacks the states.
        /// </summary>
        public BlockHash BlockHash { get; }
    }
}
