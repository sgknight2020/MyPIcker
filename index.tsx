import Taro, { Component } from '@tarojs/taro'
import {Picker, View} from "@tarojs/components";
// eslint-disable-next-line no-unused-vars
import * as React from "react";
import {AtListItem} from "taro-ui";
// @ts-ignore
import myStyle from "./scss/index.module.scss"

// 选择器属性
interface MyPickerProps {
    /**
     * 选择器类型
     */
    mode: any,
    /**
     * value 改变时触发 change 事件，event.detail = {value}
     */
    onChange: any,
    /**
     * 列改变时触发
     */
    onColumnChange?: any,
    /**
     * 表示选择了 range 中的第几个（下标从 0 开始）
     */
    value: any,
    /**
     * mode为 selector 或 multiSelector 时，range 有效
     */
    range?: any,
    /**
     * 当 range 是一个 Object Array 时，通过 rangeKey 来指定 Object 中 key 的值作为选择器显示内容
     */
    rangeKey?: any,

    /**
     * 元素的标题
     */
    title?: string,
    /**
     * 额外信息的文本
     */
    extraText?: string,
    /**
     * 箭头的方向
     */
    arrow?: 'up' | 'down' | 'right',
    /**
     * 是否必填
     */
    required?: boolean,
}

// 选择器组件
class MyPicker extends Component<MyPickerProps>{
    defaultProps={
      required: false,
    };

    render() {
        const { required, mode, onChange, onColumnChange, value, range, rangeKey, title, extraText, arrow } = this.props;
        const leftMarginRequired = '-7px';
        const leftMargin = '4px';

        return (
            <View className='at-row'>
                {
                    required && <View className={`${myStyle.picker_title}`} />
                }
                <View className='at-col-12'>
                    <Picker mode={mode} onChange={onChange} onColumnChange={onColumnChange} value={value} range={range} rangeKey={rangeKey}>
                        <View style={{marginLeft: required ? leftMarginRequired : leftMargin}}>
                            <AtListItem
                                className={`${required ? myStyle.picker_item_required : myStyle.picker_item}`}
                                title={title}
                                extraText={extraText}
                                arrow={arrow}
                            />
                        </View>
                    </Picker>
                </View>
            </View>
        );
    }
}

export default MyPicker;