require=function i(c,s,a){function l(t,e){if(!s[t]){if(!c[t]){var o="function"==typeof require&&require;if(!e&&o)return o(t,!0);if(u)return u(t,!0);var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}var r=s[t]={exports:{}};c[t][0].call(r.exports,function(e){return l(c[t][1][e]||e)},r,r.exports,i,c,s,a)}return s[t].exports}for(var u="function"==typeof require&&require,e=0;e<a.length;e++)l(a[e]);return l}({Const:[function(e,t,o){"use strict";cc._RF.push(t,"c4a11V7YdZNw7ukNjoNcJNg","Const"),t.exports={Color:[cc.Color.RED,cc.Color.ORANGE,cc.Color.YELLOW,cc.Color.GREEN,cc.Color.BLUE,cc.Color.CYAN,cc.Color.MAGENTA],soundUrl:["resources/sound/music/1_sound.MP3","resources/sound/music/2_sound.MP3","resources/sound/music/3_sound.MP3","resources/sound/music/4_sound.MP3","resources/sound/music/5_sound.MP3","resources/sound/music/6_sound.MP3","resources/sound/music/7_sound.MP3"],speed:200},cc._RF.pop()},{}],Graphsic:[function(e,t,o){"use strict";cc._RF.push(t,"0f359LEjbRGxb24LGjjsD41","Graphsic"),cc.Class({extends:cc.Component,properties:{player:cc.Node},onLoad:function(){this.graphsic=this.node.getComponent(cc.Graphics)},update:function(){this.DrawLine()},DrawLine:function(){var e=this.player.position;this.graphsic.fillColor=cc.Color.WHITE,this.graphsic.circle(e.x,e.y,10),this.graphsic.fill()}}),cc._RF.pop()},{}],ItemMgr:[function(e,t,o){"use strict";cc._RF.push(t,"00461vI6KxC8pvLrnRyTasb","ItemMgr"),cc.Class({extends:cc.Component,properties:{item:cc.Prefab,index:0},start:function(){this.schedule(this.createItem,1)},createItem:function(){if(1==gamestate_global){var e=this.randomPos(),t=cc.instantiate(this.item);t.parent=this.node,t.setPosition(e),t.getComponent("Item").initItem(this.index),this.index++,7<=this.index&&(this.index=0)}},randomPos:function(){var e=880*Math.random()-540+100;return cc.p(e,1e3)}}),cc._RF.pop()},{}],Item:[function(e,t,o){"use strict";cc._RF.push(t,"6d1e6uOKatCO6T04Zo29ygl","Item"),cc.Class({extends:cc.Component,properties:{type:-1},start:function(){this.node.on("touchstart",this.CheckIsTure,this)},update:function(e){1==gamestate_global&&(this.node.y-=Const.speed*e)},initItem:function(e){this.type=e,this.node.color=Const.Color[e]},CheckIsTure:function(){console.log("===============this.type================",this.type),this.playSound(this.type)},playSound:function(e){var t=Const.soundUrl[e];soundMgr.playSound(t)}}),cc._RF.pop()},{}],WSshaderUtil:[function(t,e,o){"use strict";cc._RF.push(e,"8db01d1NwNAsqkaIHdqfrZJ","WSshaderUtil"),Object.defineProperty(o,"__esModule",{value:!0});var n,r,i,c,s,a,l,u,h,d,p=function(){function n(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}();function g(e,t,o,n){o&&Object.defineProperty(e,t,{enumerable:o.enumerable,configurable:o.configurable,writable:o.writable,value:o.initializer?o.initializer.call(n):void 0})}function _(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(o,n,e,t,r){var i={};return Object.keys(t).forEach(function(e){i[e]=t[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,t){return t(o,n,e)||e},i),r&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(r):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(o,n,i),i=null),i}var m=cc._decorator,v=m.ccclass,y=m.property,b=(n=y({type:cc.String,displayName:"Vert No MVP Native",tooltip:"native顶点着色器的代码模块名称（文件名），比如：gray_vsh。"}),r=y({type:cc.String,displayName:"Vert Web",tooltip:"web顶点着色器的代码模块名称（文件名），比如：gray_vsh。"}),i=y({type:cc.String,displayName:"Frag",tooltip:"片元着色器的代码模块名称（文件名），比如：gray_fsh。"}),c=y({type:cc.Boolean,displayName:"Show Debug Logs",tooltip:"是否显示调试日志"}),v((a=function(e){function c(){var e,t,o;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,c);for(var n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return g(t=o=_(this,(e=c.__proto__||Object.getPrototypeOf(c)).call.apply(e,[this].concat(r))),"vert_no_mvp",l,o),g(o,"vert",u,o),g(o,"frag",h,o),g(o,"isShowDebugLogs",d,o),_(o,t)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(c,cc.Component),p(c,[{key:"onLoad",value:function(){if(cc.sys.isNative){if(null===this.frag||null===this.vert)return void(this.isShowDebugLogs&&cc.log("【WShaderUtil】vert or frag is null."))}else if(null===this.frag||null===this.vert_no_mvp)return void(this.isShowDebugLogs&&cc.log("【WShaderUtil】vert or frag is null."));this.glNode=this.getComponent("cc.Sprite")._sgNode,this.loadShaderCode(),this.onInitGLProgram()}},{key:"loadShaderCode",value:function(){this.isShowDebugLogs&&cc.log("【WShaderUtil】require GL code from module."),cc.sys.isNative?(this.isShowDebugLogs&&cc.log("【WShaderUtil】require vert_no_mvp from module."),this._default_vert_no_mvp=t(this.vert_no_mvp)):(this.isShowDebugLogs&&cc.log("【WShaderUtil】require vert from module."),this._default_vert=t(this.vert)),this.isShowDebugLogs&&cc.log("【WShaderUtil】require frag from module."),this._black_white_frag=t(this.frag)}},{key:"onInitGLProgram",value:function(){this.isShowDebugLogs&&cc.log("【WShaderUtil】init GL Program."),this._program=new cc.GLProgram,cc.sys.isNative?(this.isShowDebugLogs&&cc.log("【WShaderUtil】use native GLProgram"),this._program.initWithString(this._default_vert_no_mvp,this._black_white_frag)):(this.isShowDebugLogs&&cc.log("【WShaderUtil】use webGL GLProgram"),this._program.initWithVertexShaderByteArray(this._default_vert,this._black_white_frag),this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_POSITION,cc.macro.VERTEX_ATTRIB_POSITION),this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_COLOR,cc.macro.VERTEX_ATTRIB_COLOR),this._program.addAttribute(cc.macro.ATTRIBUTE_NAME_TEX_COORD,cc.macro.VERTEX_ATTRIB_TEX_COORDS)),this._program.link(),this._program.updateUniforms(),this.setProgram(this.glNode,this._program),this.isShowDebugLogs&&cc.log("【WShaderUtil】use GL Program success.")}},{key:"setProgram",value:function(e,t){if(this.isShowDebugLogs&&cc.log("【WShaderUtil】set GL Program."),cc.sys.isNative){var o=cc.GLProgramState.getOrCreateWithGLProgram(t);e.setGLProgramState(o)}else e.setShaderProgram(t);var n=e.children;if(n)for(var r=0;r<n.length;r++)this.setProgram(n[r],t);else console.log("============ children==null ===========")}}]),c}(),l=f(a.prototype,"vert_no_mvp",[n],{enumerable:!0,initializer:function(){return""}}),u=f(a.prototype,"vert",[r],{enumerable:!0,initializer:function(){return""}}),h=f(a.prototype,"frag",[i],{enumerable:!0,initializer:function(){return""}}),d=f(a.prototype,"isShowDebugLogs",[c],{enumerable:!0,initializer:function(){return!1}}),s=a))||s);o.default=b,e.exports=o.default,cc._RF.pop()},{}],createAnim:[function(e,t,o){"use strict";cc._RF.push(t,"c363cINKJJJObDmZ31RwnDr","createAnim");var n={name:"testAnim",duration:1,speed:1,wrapMode:cc.WrapMode.Loop};cc.Class({extends:cc.Component,properties:{animFrames:[cc.SpriteFrame],anim:cc.Animation},onLoad:function(){this.test=null;var o=this;cc.loader.loadResDir("Texture/anims",cc.SpriteFrame,function(e,t){try{o.test=t,console.log("==============this.test success ============",o.test)}catch(e){console.log("==============err============",e)}console.log("==============this.test  ============",o.test)})},start:function(){var e=cc.AnimationClip.createWithSpriteFrames(this.test,this.test.length);e._duration=n.duration,e.speed=n.speed,e.wrapMode=n.wrapMode,this.anim.addClip(e,n.name),this.anim.play(n.name)}}),cc._RF.pop()},{}],dragonCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"b4c67EzZoRD3o4xIZ9kfT1+","dragonCtrl"),cc.Class({extends:cc.Component,properties:{},onLoad:function(){this.getArmature()},getArmature:function(){this._armatureDisPlay=this.getComponent(dragonBones.ArmatureDisplay),this._armature=this._armatureDisPlay.armature(),this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.animationEventHandler,this),this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.animationEventHandler,this),this.attack()},attack:function(){this._armature.animation.fadeIn("attack_01",-1,-1,0,"hit")},attack2:function(){this._armatureDisPlay.playAnimation("attack_02",1)},animationEventHandler:function(e){e.type==dragonBones.EventObject.FADE_IN_COMPLETE?cc.log(e.detail.animationName+" fade in complete"):e.type==dragonBones.EventObject.FADE_OUT_COMPLETE&&cc.log(e.detail.animationName+" fade out complete")}}),cc._RF.pop()},{}],gameCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"590a6BdM15MkLTHskuOsW14","gameCtrl"),window.Const=e("Const"),window.soundMgr=e("soundMgr"),window.curType_global=0,window.gamestate_global=0,cc.Class({extends:cc.Component,properties:{},start:function(){curType_global=0,gamestate_global=1}}),cc._RF.pop()},{Const:"Const",soundMgr:"soundMgr"}],gray_fsh:[function(e,t,o){"use strict";cc._RF.push(t,"e658dU7FjxFfKOmp98ePPXV","gray_fsh"),t.exports="\nvarying vec4 v_fragmentColor;     \nvarying vec2 v_texCoord;      \n          \nvoid main()           \n{  \n    vec4 v_orColor = v_fragmentColor * texture2D(CC_Texture0, v_texCoord);  \n    // float gray = dot(v_orColor.rgb, vec3(0.299, 0.587, 0.114));  \n    // gl_FragColor = vec4(gray, gray, gray, v_orColor.a);  \n\n    float gray = dot(v_orColor.rgb, vec3(1,0,0));  \n    gl_FragColor = vec4(gray, gray, gray, 1);  \n\n}  \n",cc._RF.pop()},{}],gray_vsh:[function(e,t,o){"use strict";cc._RF.push(t,"60063wrBthKupq5ujRcN8vD","gray_vsh"),t.exports="\nattribute vec4 a_position;  \nattribute vec2 a_texCoord;  \nattribute vec4 a_color;  \n                      \nvarying vec4 v_fragmentColor;  \nvarying vec2 v_texCoord;  \n                                  \nvoid main()   \n{                             \n    gl_Position = CC_PMatrix * a_position;  \n    v_fragmentColor = a_color;  \n    v_texCoord = a_texCoord;  \n} \n",cc._RF.pop()},{}],"load-subpackage":[function(e,t,o){"use strict";cc._RF.push(t,"3aa327M7aRKtrMHYgAaPqVj","load-subpackage"),cc.Class({extends:cc.Component,start:function(){this.label=cc.find("Canvas/New Label").getComponent(cc.Label),this.label.textKey=""},loadSubpackage:function(){var t=this;console.log("===========loadSubpackage=============="),cc.loader.downloader.loadSubpackage("subpackage",function(e){if(e)return console.error(e),void(t.label.textKey="cases/subpackage.failed");console.log("load subpackage successfully."),cc.director.loadScene("subpackage")})}}),cc._RF.pop()},{}],playerMove:[function(e,t,o){"use strict";cc._RF.push(t,"8179bMro3JPw7R2zW7+zg1E","playerMove"),cc.director.getPhysicsManager().enabled=!0,cc.Class({extends:cc.Component,properties:{posArr:[cc.Node],pos:cc.Node,iscanMove:!1,isNextPos:!1,beginPos:cc.Node,index:0},start:function(){cc.director.getCollisionManager().enabled=!0,cc.director.getCollisionManager().enabledDebugDraw=!0,console.log("======================",180*Math.atan(1)/Math.PI);for(var e=0;e<this.pos.childrenCount;e++)this.posArr.push(this.pos.children[e]);this.reSetPlayerPos()},update:function(e){if(this.iscanMove){var t=this.index%(this.posArr.length-1),o=this.posArr[t].position,n=cc.p(o.x-this.node.position.x,o.y-this.node.position.y),r=cc.pNormalize(n);this.node.position=cc.p(this.node.position.x+250*r.x*e,this.node.position.y+250*r.y*e);var i=0;t>=this.posArr.length-3&&(i=180,console.log("========this.index >= this.posArr.length - 3========="));var c=-1*Math.atan((o.y-this.node.position.y)/(o.x-this.node.position.x))*180/Math.PI;this.node.rotation=0==t?90:9==t?-90:c+i,Math.abs(n.x)+Math.abs(n.y)<2&&(this.isNextPos=!0)}this.iscanMove&&this.isNextPos&&(console.log("=============this.isNextPos============"),this.isNextPos=!1,this.index++)},reSetPlayerPos:function(){var e=this,t=cc.moveTo(.5,this.beginPos.position),o=cc.sequence(t,cc.callFunc(function(){e.iscanMove=!0}));this.node.runAction(o)},moveByPos:function(){console.log("==========moveByPos==========");var e=cc.cardinalSplineTo(5,this.posArr,0);this.node.runAction(cc.repeatForever(e))}}),cc._RF.pop()},{}],scrachCardCtrl:[function(e,t,o){"use strict";cc._RF.push(t,"35b15ICSL9BW7XZthoMe2Q6","scrachCardCtrl"),cc.Class({extends:cc.Component,properties:{rsultLabel:cc.Label,mask:cc.Mask,promptLabel:cc.Label},onLoad:function(){console.log("=============this.mask=============",this.mask),this.node.on(cc.Node.EventType.TOUCH_START,this._onTouchBegin,this),this.node.on(cc.Node.EventType.TOUCH_MOVE,this._onTouchMoved,this),this.node.on(cc.Node.EventType.TOUCH_END,this._onTouchEnd,this),this.node.on(cc.Node.EventType.TOUCH_CANCEL,this._onTouchCancel,this)},onDestroy:function(){this.node.off(cc.Node.EventType.TOUCH_START,this._onTouchBegin,this),this.node.off(cc.Node.EventType.TOUCH_MOVE,this._onTouchMoved,this),this.node.off(cc.Node.EventType.TOUCH_END,this._onTouchEnd,this),this.node.off(cc.Node.EventType.TOUCH_CANCEL,this._onTouchCancel,this)},start:function(){},_onTouchBegin:function(e){cc.log("touchBegin");var t=e.touch.getLocation();t=this.node.convertToNodeSpaceAR(t),this._addCircle(t)},_onTouchMoved:function(e){var t=e.touch.getLocation();t=this.node.convertToNodeSpaceAR(t),this._addCircle(t,!0)},_onTouchEnd:function(e){var t=e.touch.getLocation();t=this.node.convertToNodeSpaceAR(t),this._addCircle(t)},_onTouchCancel:function(e){var t=e.touch.getLocation();t=this.node.convertToNodeSpaceAR(t),this._addCircle(t)},_addCircle:function(e,t){var o=this.mask._clippingStencil;console.log("===============stencil==============",o);var n=cc.color(255,255,255,0);o.drawPoly(this.mask._calculateCircle(e,cc.p(20,20),64),n,0,n),cc.renderer.childrenOrderDirty=!0}}),cc._RF.pop()},{}],soundMgr:[function(e,t,o){"use strict";cc._RF.push(t,"fbb2do8Z71AioNE/9M0DNSz","soundMgr"),t.exports={bgMusic:"",playSound:function(e){var t=cc.url.raw(e);cc.audioEngine.play(t)},playMusic:function(e){var t=cc.url.raw(e);this.bgMusic=cc.audioEngine.play(t)}},cc._RF.pop()},{}],testJson:[function(e,t,o){"use strict";cc._RF.push(t,"dc8a2Z9b5pClL7yueR7zf4M","testJson"),cc.Class({extends:cc.Component,properties:{playerLabel:cc.Label,objLabel:cc.Label},start:function(){var n=this;cc.loader.loadRes("Json/test.json",function(e,t){var o=JSON.parse(t);n.playerLabel.string="playerName :"+o.name+"\n\nplayerAge :"+o.age+"\n\n",n.objLabel.string="ObjName :"+o.obj.objname+"\nobjMsg :"+o.obj.objMsg,console.log("============self.arr[0]=============",o.arr[0]),console.log("============self.arr.length=============",o.arr.length)})}}),cc._RF.pop()},{}]},{},["testJson","createAnim","dragonCtrl","scrachCardCtrl","Graphsic","playerMove","Const","Item","ItemMgr","gameCtrl","soundMgr","WSshaderUtil","gray_fsh","gray_vsh","load-subpackage"]);