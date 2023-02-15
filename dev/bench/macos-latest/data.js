window.BENCHMARK_DATA = {
  "lastUpdate": 1676488222511,
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
        "date": 1676488166920,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 182573.86170212767,
            "unit": "ns",
            "range": "± 30415.95857647477"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 134883.98387096773,
            "unit": "ns",
            "range": "± 19367.05423247838"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 305188.9347826087,
            "unit": "ns",
            "range": "± 50602.97104887934"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 277440.31111111114,
            "unit": "ns",
            "range": "± 35621.15411510428"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4544377.530927835,
            "unit": "ns",
            "range": "± 598872.7241610457"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11742117.153846154,
            "unit": "ns",
            "range": "± 1330576.2569186157"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 28654.214285714286,
            "unit": "ns",
            "range": "± 7987.501146281964"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 77471.39795918367,
            "unit": "ns",
            "range": "± 13777.06660288038"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 73364.54347826086,
            "unit": "ns",
            "range": "± 13032.908190392032"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 164376.9081632653,
            "unit": "ns",
            "range": "± 28511.95293281443"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 10252.766666666666,
            "unit": "ns",
            "range": "± 1556.1772435950688"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 27487.33695652174,
            "unit": "ns",
            "range": "± 5994.013798172736"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 6420947.605427631,
            "unit": "ns",
            "range": "± 557565.4831266473"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 7289595.819148936,
            "unit": "ns",
            "range": "± 1207377.5211697721"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 30946301.11235955,
            "unit": "ns",
            "range": "± 2436816.3394988505"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 8081982.510869565,
            "unit": "ns",
            "range": "± 1209329.6687481708"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 35264366.29310345,
            "unit": "ns",
            "range": "± 2124484.2040005093"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 8374155.340364584,
            "unit": "ns",
            "range": "± 863823.328738973"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 2758811.434630102,
            "unit": "ns",
            "range": "± 337285.17206401663"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1642496.2295507812,
            "unit": "ns",
            "range": "± 161490.7103990309"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3214637.2728737113,
            "unit": "ns",
            "range": "± 279520.720352743"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1057910.6840770992,
            "unit": "ns",
            "range": "± 105209.75571871907"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 888954.1415807846,
            "unit": "ns",
            "range": "± 69027.62924276863"
          }
        ]
      }
    ]
  }
}