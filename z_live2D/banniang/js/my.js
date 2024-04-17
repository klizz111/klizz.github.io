var pio = new Paul_Pio({
    "mode": "fixed",
    "tips": true,
    "hidden": true,
    "content": {
        "welcome": ["uuuyu", "zzzzzz"],
    },
    "model": [
    //"banniang/live2d-widget-models/live2d-widget-model-miku/assets/miku.model.json", //初音.0
    "banniang/live2d-widget-models/live2d-widget-model-shizuku/assets/shizuku.model.json",// 萌娘.1
    //"banniang/live2d-widget-models/live2d-widget-model-chitose/assets/chitose.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-koharu/assets/koharu.model.json",//2
    "banniang/live2d-widget-models/live2d-widget-model-haru/01/assets/haru01.model.json",//3
    "banniang/live2d-widget-models/live2d-widget-model-wanko/assets/wanko.model.json",//4
    "banniang/live2d-widget-models/live2d-widget-model-vert/vert_classic/vert_classic.model.json",//5
    "banniang/live2d-widget-models/live2d-widget-model-nepgear_extra/nepgear_extra/nepgear_extra.model.json",//6
    "banniang/live2d-widget-models/live2d-widget-model-haruto/assets/haruto.model.json",//7
    "banniang/live2d-widget-models/live2d-widget-model-haru/02/assets/haru02.model.json",//8
    "banniang/live2d-widget-models/live2d-widget-model-histoire/histoire/histoire.model.json",//9
    "banniang/live2d-widget-models/live2d-widget-model-blanc_normal/blanc_normal/blanc_normal.model.json",//10
    "banniang/live2d-widget-models/live2d-widget-model-z16/assets/z16.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-ShizukuTalk/shizuku-pajama/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-ShizukuTalk/shizuku-48/index.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-bilibililive/22/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-bilibililive/33/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-KantaiCollection/murakumo/index.json", 
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/nepswim/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Potion-Maker/Pio/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Potion-Maker/Tia/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Asuna/Asuna/asuna_04.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/blanc_normal/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/blanc_swimwear/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/general/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/histoirenohover/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/vert_classic/index.json",
    ]
});

var models = [
    //"banniang/live2d-widget-models/live2d-widget-model-miku/assets/miku.model.json", //初音.0
    "banniang/live2d-widget-models/live2d-widget-model-shizuku/assets/shizuku.model.json",// 萌娘.1
    //"banniang/live2d-widget-models/live2d-widget-model-chitose/assets/chitose.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-koharu/assets/koharu.model.json",//2
    "banniang/live2d-widget-models/live2d-widget-model-haru/01/assets/haru01.model.json",//3
    "banniang/live2d-widget-models/live2d-widget-model-wanko/assets/wanko.model.json",//4
    "banniang/live2d-widget-models/live2d-widget-model-vert/vert_classic/vert_classic.model.json",//5
    "banniang/live2d-widget-models/live2d-widget-model-nepgear_extra/nepgear_extra/nepgear_extra.model.json",//6
    "banniang/live2d-widget-models/live2d-widget-model-haruto/assets/haruto.model.json",//7
    "banniang/live2d-widget-models/live2d-widget-model-haru/02/assets/haru02.model.json",//8
    "banniang/live2d-widget-models/live2d-widget-model-histoire/histoire/histoire.model.json",//9
    "banniang/live2d-widget-models/live2d-widget-model-blanc_normal/blanc_normal/blanc_normal.model.json",//10
    "banniang/live2d-widget-models/live2d-widget-model-z16/assets/z16.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-ShizukuTalk/shizuku-pajama/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-ShizukuTalk/shizuku-48/index.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-bilibililive/22/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-bilibililive/33/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-KantaiCollection/murakumo/index.json", 
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/nepswim/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Potion-Maker/Pio/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Potion-Maker/Tia/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-Asuna/Asuna/asuna_04.model.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/blanc_normal/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/blanc_swimwear/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/general/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/histoirenohover/index.json",
    "banniang/live2d-widget-models/live2d-widget-model-HyperdimensionNeptunia/vert_classic/index.json",
    ];
var selectElement = document.getElementById('modelSelect');

for(let i = 0; i < models.length;i++)
{
    var option = document.createElement('option');
    option.value = i;
    option.id = 'opts';
    let splitText = models[i].split("/");
    if(splitText.length >= 3)
    {
        let tx1 = splitText[2];
        let tx2 = splitText[3];
        option.text = tx1+'/'+tx2;
    }else
    {
    optionText = models[i];
    }

    selectElement.appendChild(option);
}

// 获取<select>元素
var selectElement = document.getElementById('modelSelect');

console.log(selectElement.value);
selectElement.onchange = function()
{
    var selectedValue = selectElement.value;
    console.log(selectedValue);
}
