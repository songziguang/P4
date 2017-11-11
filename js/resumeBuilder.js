var work = {
	"jobs": [
		{
			"employer": "福建标新集团",
			"title": "机修工",
			"location": "福建漳州",
			"dates": "2007.12-2011.3",
			"description": "负责车间内几台设备的保养维修"
		},
		{
			"employer": "北京中天置地房地产经纪公司",
			"title": "房产经纪人",
			"location": "北京",
			"dates": "2012.12-2014.11",
			"description": "1、 负责客户的接待、咨询工作，为客户提供专业的房地产置业咨询服务；2、 陪同客户看房，促成二手房买卖或租赁业务；3、 负责公司房源开发与积累，并与客户建立良好业务协作关系"
		},
		{
			"employer": "北京微服天下",
			"title": "区域主管",
			"location": "北京",
			"dates": "2015.4-至今",
			"description": "区域内人员管理，各部门协调工作"
		}
	]
}
var projects = {
	"projects": [
		{
			"title": "animal_card",
			"dates": "2017.8.31",
			"description": "动物交换卡",
			"images": [
				"images/582.jpg",
				"images/timg.jpg"
			]
		}
	]
}
var bio = {
	"name" : "宋子光",
	"role" : "前端开发",
	"contacts" : {
		"mobile" : "15110257530，15188766460",
		"email" : "chenxia6@163.com",
		"twitter" : "非著名人士",
		"github" : "songziguang",
		"blog" : "瀦龍散人",
		"location" : "北京"
	},
	"bioPic" : "images/582.jpg",
	"welcomeMessage" : "欢迎访问我的主页",
	"skills" : ["html","css","javascript"]
}

var education = {
	"schools": [
		{
			"name": "鲍墟一中",
			"location": "鲍墟",
			"degree": "初中",
			"dates": "1997.9-2000.7",
			"url": "https://tieba.baidu.com/f?kw=%E9%B2%8D%E5%A2%9F%E4%B8%AD%E5%AD%A6",
			"majors": ["语文","数学"]
		},
		{
			"name": "武清卫校",
			"location": "天津武清",
			"degree": "中专",
			"dates": "2000.9-2002.7",
			"url": "http://tieba.baidu.com/f?kw=%E6%AD%A6%E6%B8%85%E5%8D%AB%E6%A0%A1",
			"majors": ["药剂","解剖"]

		}
	],
	"onlineCourses": [
		{
			"title": "前端开发",
			"school": "达内教育",
			"dates": "2015.6-2015.11",
			"url": "http://bj.tedu.cn/pc/?bdpz-pc"
		}		
	]
};
bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%",bio.bioPic);
	var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedwelcomeMessage);


	var formattedmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedemail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedtwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedgithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedblog = HTMLblog.replace("%data%",bio.contacts.blog);
	var formattedlocation = HTMLlocation.replace("%data%",bio.contacts.location);
	$("#topContacts").append(formattedmobile);
	$("#topContacts").append(formattedemail);
	$("#topContacts").append(formattedtwitter);
	$("#topContacts").append(formattedblog);
	$("#topContacts").append(formattedlocation);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for(var skill = 0; skill < bio.skills.length; skill++){
		var formattedSkill = HTMLskills.replace("%data%" , bio.skills[skill]);
		$("#skills:last").append(formattedSkill);}
		
	}
}
/*function  displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
			("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
			("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer +
			formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace
			("%data%",work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace
			("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
displayWork();*/
work.display = function () {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace
				("%data%",job.employer);
			var formattedTitle = HTMLworkTitle.replace
				("%data%",job.title);
			var formattedEmployerTitle = formattedEmployer +
				formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace
				("%data%",job.dates);
			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace
				("%data%",job.description);
			$(".work-entry:last").append(formattedDescription);
	});
}
projects.display = function () {
	$("#projects").append(HTMLprojectStart);
		
	for (var project = 0;project < projects.projects.length; project++) {
		var projectTitle = HTMLprojectTitle.replace
			("%data%",projects.projects[project].title);		
		var projectDates = HTMLprojectDates.replace
			("%data%",projects.projects[project].dates);		
		var projectDescription = HTMLprojectDescription.replace
			("%data%",projects.projects[project].description);
		$(".project-entry:last").append(projectTitle,projectDates,projectDescription);
		
		if(projects.projects[project].images.length > 0){
			for(var image = 0; image < projects.projects[project].images.length; image++){
				var projectImage = HTMLprojectImage.replace
				("%data%",projects.projects[project].images[image]);
				$(".project-entry:last").append(projectImage);
			}
		}
	}
}
education.display = function() {
	education.schools.forEach(function(school) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace
			("%data%",school.name);
		var formattedLocation = HTMLschoolLocation.replace
			("%data%",school.location);
		var formattedDegree = HTMLschoolDegree.replace
			("%data%",school.degree);
		var formattedDates = HTMLschoolDates.replace
			("%data%",school.dates);
		var formattedMajor = HTMLschoolMajor.replace
			("%data%",school.majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	});
	$(".education-entry:last").append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {		
		var formattedTitle = HTMLonlineTitle.replace
			("%data%",course.title);
		var formattedSchool = HTMLonlineSchool.replace
			("%data%",course.school);
		var formattedDates = HTMLonlineDates.replace
			("%data%",course.dates);
		var formattedUrl = HTMLonlineURL.replace
			("%data%",course.url);
		$(".education-entry:last").append(formattedTitle + 
			formattedSchool,formattedDates,formattedUrl);
	});
};

bio.display();
work.display();
projects.display();
education.display();

function inName(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + 
				name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);