import tabbarItems from '../../common/datas/tabbarItems.js'
export default {
    data: {
        tabbarItems,
        nowIndex: 0
    },
    props:{
        index:{
            type: Number,
            default(){
                return 0;
            }
        }
    },
    changeIndex(index) {
        // 当前页面不跳转
        if (index == this.nowIndex) {
            console.log("当前页面不跳转");
            return;
        }

        // 修改页面索引
        this.nowIndex = index;
        console.log(index);

        // 传参父组件
        this.$emit("changeIndex",{
            index: index
        });
    }
}
