// ----------------------------------------------------------------------------
// markItUp!
// ----------------------------------------------------------------------------
// Copyright (C) 2008 Jay Salvat
// http://markitup.jaysalvat.com/
// ----------------------------------------------------------------------------
// BBCode tags example
// http://en.wikipedia.org/wiki/Bbcode
// ----------------------------------------------------------------------------
// Feel free to add more tags
// ----------------------------------------------------------------------------
mySettings = {
	previewParserPath:	'', // path to your BBCode parser
	markupSet: [
		{name:'Bold', key:'B', openWith:'[b]', closeWith:'[/b]'},
		{name:'Italic', key:'I', openWith:'[i]', closeWith:'[/i]'},
		{name:'Underline', key:'U', openWith:'[u]', closeWith:'[/u]'},
		{name:'Таблица', openWith:'[columns]', closeWith:'[/columns]',
		dropMenu :[
			{name:'Нова клетка', openWith:'[nextcol]' },
			{name:'Нов ред', openWith:'[break_column]' },
			{name:'Таблица с рамка', openWith:'[columns_border]', closeWith:'[/columns_border]' },
			{name:'Нова клетка (с рамка)', openWith:'[nextcol_border]' },
			{name:'Нов ред (с рамка)', openWith:'[break_column_border]' }
		]},
		
		{name:'Картинка', key:'P', replaceWith:'[img][![Url адрес на картинката]!][/img]',
		dropMenu :[
			{name:'С рамка', replaceWith:'[img][![Url адрес на картинката]!][/img]' },
			{name:'Без рамка', replaceWith:'[imgborderless][![Url адрес на картинката]!][/imgborderless]' },
			{name:'С връзка', replaceWith:'[url=[![Url адрес на връзката (с http://)]!]][imglink][![Url адрес на картинката]!][/imglink][/url]' },
			{name:'Imgur галерия', replaceWith:'[imgur][![Kопирайте уникалния номер на галерията след символите /a/ от линка на галерията]!][/imgur]' },
		]},
		{name:'Линк', key:'L', openWith:'[url=[![Url адрес]!]]', closeWith:'[/url]', placeHolder:'линк',
		dropMenu :[
			{name:'Линк с превю', openWith:'[link][![Url адрес]!]', closeWith:'[/link]' },
		]},
		{separator:'&nbsp;' },
		{name:'Шрифт', key:'S', openWith:'[size=[![Размер на шрифта]!]]', closeWith:'[/size]',
		dropMenu :[
			{name:'Голям', openWith:'[size=5]', closeWith:'[/size]' },
			{name:'Нормален', openWith:'[size=3]', closeWith:'[/size]' },
			{name:'Малък', openWith:'[size=1]', closeWith:'[/size]' },
			
			{name:'Diablo шрифт', openWith:'[font=diablo]', closeWith:'[/font]' },
			{name:'Diablo 4 шрифт', openWith:'[font=OldFenris-Regular]', closeWith:'[/font]' },
			{name:'Центриран', openWith:'[center]', closeWith:'[/center]' },
			{name:'Задраскан', openWith:'[s]', closeWith:'[/s]' },
			
			{name:'Отдясно', openWith:'[right]', closeWith:'[/right]' },
			{name:'Кутия', openWith:'[box]', closeWith:'[/box]'},
			{name:'Spoiler', openWith:'[spoiler]', closeWith:'[/spoiler]'},
			{name:'Spoiler текст', openWith:'[hide]', closeWith:'[/hide]'}
		]},
		{separator:'&nbsp;' },
		{name:'Списък', openWith:'[list]\n', closeWith:'\n[/list]'},
		//{name:'Numeric list', openWith:'[list=[![Starting number]!]]\n', closeWith:'\n[/list]'}, 
		{name:'List item', openWith:'[*] '},
		{separator:'&nbsp;' },
		{name:'Цитат', openWith:'[quote]', closeWith:'[/quote]',
		dropMenu :[
			{name:'Bluepost', openWith:'[bluepost]', closeWith:'[/bluepost]' },
			{name:'Twitter Post', openWith:'[twitter][![Линка трябва да има следната структура: https://twitter.com/Diablo/status/895683495187456000]!]', closeWith:'[/twitter]'},
			{name:'Facebook Post', openWith:'[facebook][![Линка трябва да има следната структура: https://www.facebook.com/Diablo.eu/posts/1028566357246618]!]', closeWith:'[/facebook]'},
			{name:'Reddit Post', openWith:'[reddit][![Линк към Reddit пост или коментар]!]', closeWith:'[/reddit]'}
		]},
		{name:'Код', openWith:'[code]', closeWith:'[/code]'}, 
		{separator:'&nbsp;' },
		//{name:'Preview', className:"preview", call:'preview' },
                {name:'Цветове', 
			className:'colors', 
			openWith:'[color=[![Цвят по избор (Hex)]!]]', 
			closeWith:'[/color]', 
				dropMenu: [
					{name:'Yellow',	openWith:'[color=yellow]', 	closeWith:'[/color]', className:"col1-1" },
					{name:'Orange',	openWith:'[color=orange]', 	closeWith:'[/color]', className:"col1-2" },
					{name:'Red', 	openWith:'[color=#d80909]', 	closeWith:'[/color]', className:"col1-3" },
					
					{name:'Blue', 	openWith:'[color=#0099ff]', 	closeWith:'[/color]', className:"col2-1" },
					{name:'Purple', openWith:'[color=#a752fd]', 	closeWith:'[/color]', className:"col2-2" },
					{name:'Green', 	openWith:'[color=#0bc10b]', 	closeWith:'[/color]', className:"col2-3" },
					
					{name:'White', 	openWith:'[color=white]', 	closeWith:'[/color]', className:"col3-1" },
					{name:'Gray', 	openWith:'[color=gray]', 	closeWith:'[/color]', className:"col3-2" },
					{name:'Black',	openWith:'[color=black]', 	closeWith:'[/color]', className:"col3-3" },
					
					{name:'Pink', 	openWith:'[color=#f79fae]', 	closeWith:'[/color]', className:"col4-1" },
					{name:'Greenish', 	openWith:'[color=#4ab388]', 	closeWith:'[/color]', className:"col4-2" },
					{name:'Darkgoldenrod',	openWith:'[color=#b8860b]', 	closeWith:'[/color]', className:"col4-3" }
				]
		},
                {separator:'&nbsp;' },
                {name:'Емотикони', 
			className:'emoticons',
				dropMenu: [
					{name:'angry', openWith:':angry:', className:"col1-1" },
					{name:'anime', openWith:'^_^',  className:"col1-2" },
					{name:'bigeyes', openWith:'8)', className:"col1-3" },
					{name:'bigsmile', openWith:':D', className:"col1-4" },
					{name:'bigwink', openWith:';D', className:"col1-5" },
					
					{name:'blue', openWith:':blue:', className:"col2-1" },
					{name:'confuse', openWith:':?', className:"col2-2" },
					{name:'cool', openWith:'B)', className:"col2-3" },
					{name:'evil', openWith:':evil:', className:"col2-4" },
					{name:'frown', openWith:':(', className:"col2-5" },

					{name:'heart', openWith:':heart:', className:"col3-1" },
					{name:'irritated', openWith:':/', className:"col3-2" },
					{name:'laugh', openWith:'XD', className:"col3-3" },
					{name:'lookleft', openWith:':lookleft:', className:"col3-4" },
					{name:'lookright', openWith:':lookright:', className:"col3-5" },
                                        
					{name:'neutral', openWith:':|', className:"col4-1" },
					{name:'saint', openWith:'O:)', className:"col4-2" },
					{name:'sleepy', openWith:':zzz:', className:"col4-3" },
					{name:'smile', openWith:':)', className:"col4-4" },
					{name:'smile3', openWith:':3', className:"col4-5" },
                                        
					{name:'sneaky', openWith:':sneaky:', className:"col5-1" },
					{name:'star', openWith:':star:', className:"col5-2" },
					{name:'surprise', openWith:':O', className:"col5-3" },
					{name:'sweatdrop', openWith:'^^;', className:"col5-4" },
					{name:'teeth', openWith:':teeth:', className:"col5-5" },
                                        
					{name:'tongue', openWith:':P', className:"col6-1" },
					{name:'wink', openWith:';)', className:"col6-2" },
					{name:'wink3', openWith:';3', className:"col6-3" },
					{name:'worry', openWith:':s', className:"col6-4" },
					{name:'boggle', openWith:'o.O', className:"col6-5" },
					
					{name:'facepalm', openWith:':facepalm:', className:"col7-1" },
					{name:'salute', openWith:':salute:', className:"col7-2" },
					{name:'doh', openWith:':doh:', className:"col7-3" },
					{name:'wall', openWith:':wall:', className:"col7-4" },
					{name:'nono', openWith:':nono:', className:"col7-5" },
					
					{name:'', openWith:':health:', className:"col8-1" },
					{name:'', openWith:':barb:', className:"col8-2" },
					{name:'', openWith:':crusader:', className:"col8-3" },
					{name:'', openWith:':monk:', className:"col8-4" },
					{name:'', openWith:':wizard:', className:"col8-5" },
					
					{name:'', openWith:':wd:', className:"col9-1" },
					{name:'', openWith:':dh:', className:"col9-2" },
					{name:'', openWith:':necro:', className:"col9-3" },
					
				]
		},{name:'Видео', className:"youtube",
		dropMenu :[
			{name:'YouTube', key:'Y', replaceWith:'[youtube][![Вземете съкратения линк от бутона "Share" под самото видеото в YouTube. (Пример: http://youtu.be/D-85YBegae4)]!][/youtube]'}, 
			{name:'HTML5 плеър', replaceWith:'[video][![Поставете линка към .mp4 или .webm файл]!][/video]' },
			{name:'Facebook', replaceWith:'[facebook-video][![Линка трябва да има следната структура: https://www.facebook.com/Diablo.eu/videos/514203422016250/]!][/facebook-video]' },
		]},
             
		{separator:'&nbsp;' },   
	]
}

