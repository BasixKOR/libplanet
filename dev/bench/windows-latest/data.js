window.BENCHMARK_DATA = {
  "lastUpdate": 1676487661989,
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
        "date": 1676487623954,
        "tool": "benchmarkdotnet",
        "benches": [
          {
            "name": "Libplanet.Benchmarks.BlockChain.ContainsBlock",
            "value": 124058.16326530612,
            "unit": "ns",
            "range": "± 8417.751535981757"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRootModel",
            "value": 5937527.253605769,
            "unit": "ns",
            "range": "± 25954.715138270716"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeLeafModel",
            "value": 1938010.9825721155,
            "unit": "ns",
            "range": "± 4336.038097346957"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.EncodeRawLeafModel",
            "value": 1467384.8524305555,
            "unit": "ns",
            "range": "± 30019.182726464"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRootModel",
            "value": 3234495.207331731,
            "unit": "ns",
            "range": "± 14282.338805340505"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeLeafModel",
            "value": 1027942.8786057692,
            "unit": "ns",
            "range": "± 5349.448887265603"
          },
          {
            "name": "Libplanet.Benchmarks.DataModel.DataModelBenchmark.DecodeRawLeafModel",
            "value": 957518.4692382812,
            "unit": "ns",
            "range": "± 18117.172322106646"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockEmpty",
            "value": 5687653.007277397,
            "unit": "ns",
            "range": "± 280585.8657896854"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionNoAction",
            "value": 6926164.705882353,
            "unit": "ns",
            "range": "± 101352.46630679781"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsNoAction",
            "value": 31972892.53731343,
            "unit": "ns",
            "range": "± 1517907.367249242"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockOneTransactionWithActions",
            "value": 7032858.333333333,
            "unit": "ns",
            "range": "± 94643.51736272211"
          },
          {
            "name": "Libplanet.Benchmarks.MineBlock.MineBlockTenTransactionsWithActions",
            "value": 33796564.28571428,
            "unit": "ns",
            "range": "± 561784.3175059307"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstEmptyBlock",
            "value": 108403.1914893617,
            "unit": "ns",
            "range": "± 8709.868980751793"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstBlockWithTxs",
            "value": 236203.57142857142,
            "unit": "ns",
            "range": "± 10049.694057499992"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutBlockOnManyBlocks",
            "value": 206601.03092783506,
            "unit": "ns",
            "range": "± 13053.874702916763"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldBlockOutOfManyBlocks",
            "value": 4361950,
            "unit": "ns",
            "range": "± 43099.00498583733"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentBlockOutOfManyBlocks",
            "value": 11159126.666666666,
            "unit": "ns",
            "range": "± 99867.50126804921"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentBlockHash",
            "value": 22672.043010752688,
            "unit": "ns",
            "range": "± 2192.247486395692"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutFirstTx",
            "value": 62250,
            "unit": "ns",
            "range": "± 6462.659494506536"
          },
          {
            "name": "Libplanet.Benchmarks.Store.PutTxOnManyTxs",
            "value": 46775.43859649123,
            "unit": "ns",
            "range": "± 1838.019188240659"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetOldTxOutOfManyTxs",
            "value": 115579.78723404255,
            "unit": "ns",
            "range": "± 19642.51248512872"
          },
          {
            "name": "Libplanet.Benchmarks.Store.GetRecentTxOutOfManyTxs",
            "value": 7412.5,
            "unit": "ns",
            "range": "± 1004.5423152649641"
          },
          {
            "name": "Libplanet.Benchmarks.Store.TryGetNonExistentTxId",
            "value": 22188.42105263158,
            "unit": "ns",
            "range": "± 2181.443166555978"
          }
        ]
      }
    ]
  }
}