window.BENCHMARK_DATA = {
  "lastUpdate": 1676489345942,
  "repoUrl": "https://github.com/BasixKOR/libplanet",
  "entries": {
    "Benchmark.Net Benchmark": [
      {
        "commit": {
          "author": {
            "email": "limeelbee@gmail.com",
            "name": "Chanhyuck Ko",
            "username": "limebell"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8420cba8929cb9173942a1ad17546d684358527b",
          "message": "Merge pull request #2814 from limebell/fix/multiple-task-blocksync\n\nPrevent duplicated ProcessBlockDemand",
          "timestamp": "2023-02-15T17:28:49+09:00",
          "tree_id": "def5643cc94889522aea1a333b9679d0572e97a4",
          "url": "https://github.com/BasixKOR/libplanet/commit/8420cba8929cb9173942a1ad17546d684358527b"
        },
        "date": 1676489333994,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 101294.25806451614,
            "unit": "ns",
            "range": "± 2847.17790063239"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5911510.535714285,
            "unit": "ns",
            "range": "± 30507.32332986626"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2002109.7299107143,
            "unit": "ns",
            "range": "± 5098.26691807687"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1375852.6240234375,
            "unit": "ns",
            "range": "± 417.09954958645636"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 2529564.5889423075,
            "unit": "ns",
            "range": "± 1275.7998637236992"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 803181.5285993303,
            "unit": "ns",
            "range": "± 868.3106670228119"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 750601.0057091346,
            "unit": "ns",
            "range": "± 373.9335650458175"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 88263.0744680851,
            "unit": "ns",
            "range": "± 7935.859009596966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 194884.6875,
            "unit": "ns",
            "range": "± 7694.723163300966"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 170406.7142857143,
            "unit": "ns",
            "range": "± 2927.6533377321275"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 3767756.1666666665,
            "unit": "ns",
            "range": "± 11759.447280094984"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 9548541.333333334,
            "unit": "ns",
            "range": "± 50982.19426940949"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 15612.989247311827,
            "unit": "ns",
            "range": "± 1268.76980382594"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 48893.27173913043,
            "unit": "ns",
            "range": "± 4271.121789756037"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 45015.154639175256,
            "unit": "ns",
            "range": "± 3216.6494580936696"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 94272.71578947369,
            "unit": "ns",
            "range": "± 12660.320642861585"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 5427.322916666667,
            "unit": "ns",
            "range": "± 551.2431404474354"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 15201.755319148937,
            "unit": "ns",
            "range": "± 1057.7007695856873"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 4456612.071614583,
            "unit": "ns",
            "range": "± 11838.728980958364"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 5600862.517857143,
            "unit": "ns",
            "range": "± 221830.02033883275"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 25778311,
            "unit": "ns",
            "range": "± 378636.7654239539"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 6248177.25,
            "unit": "ns",
            "range": "± 77760.60713044526"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 28524140.944444444,
            "unit": "ns",
            "range": "± 546197.613274178"
          }
        ]
      }
    ]
  }
}