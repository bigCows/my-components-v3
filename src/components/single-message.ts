/**
 * @file: single-button.ts
 * @description: 单例模式的message
 * 
 */

interface optionType {
    [key: string]: any;
  }
let messageInstance:any = null;
const resetMessage = (options : optionType):void => {
    if(messageInstance) {
        messageInstance.close()
    }
    messageInstance = ElMessage(options)
};
export const singleMessage = resetMessage