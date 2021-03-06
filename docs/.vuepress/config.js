module.exports = {
    base:'/gulu-demo/',
    title: '轱辘UI',
    description: '一个好用的UI框架',
    themeConfig: {
        sidebar: [
            {
              title:'入门' ,
                children:[
                    '/get-started/',
                    '/install/',
                ]
            },

            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/toast',
                    '/components/popover',
                    '/components/layout',
                    '/components/grid',


                ]
            }
        ]
    }
}
