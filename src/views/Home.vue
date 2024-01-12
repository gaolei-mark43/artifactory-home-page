<template>
	<div>
		<h3>私服介绍</h3>
		<p>公司私服使用Artifactory搭建，Artifatory和Nexus类似，但功能更强大，支持主流Java/Maven仓库，也支持（如JS、Pypi、PHP、Docker、Conan、Conda、Cocoa和Pub等）等仓库，同时支持高可用、易扩容等优点。</p>
		<p>公司私服目前已支持Java/Maven、Android/Gradle、JavaScript/NPM、C/C++/Conan、Conda、Python/Pypi、Flutter/Dart和Cocoapods包管理</p>
		<h4>一、仓库类型介绍</h4>
		<p>Artifactory可创建远程、本地、虚拟三种仓库。</p>
		<p>远程库：可下载，不可上传。用来代理开源仓库下载开源依赖。artifactory从远程下载同时缓存依赖到本地，可提高构建速度，减少外网影响。</p>
		<p>本地库：可上传，可下载。公司内项目依赖管理，例自研jar上传供其他项目业务直接依赖使用。</p>
		<p>虚拟库：可下载，不可上传，代理Artifactory中相似功能一组远程和本地库做为唯一访问入口，减少配置过多repository url。</p>
		<div style="display: flex; justify-content: center;">
			<img src="../static/img.png" alt="私服组成示意图" width="900" height="400" style="text-align: center;">
		</div>
		<p style="text-align: center;">图：私服组成示意图</p>
		<p>部分说明:</p>
		<p>远程库：出于安全，办公网络禁止了Google、apache和Oracle等域名访问。质效Artifatory代理了上述、阿里和华为等仓库供使用。</p>
		<p>本地库：maven类私服本地库按照bgbu划分mvn-release-private&mvn-snapshot-private供各个bgbu内部项目依赖管理。</p>
		<p>虚拟库：创建mvn-repo、npm-repo等作为maven&gardle做为依赖统一下载地址。</p>
		<h3>二、私服仓库组成</h3>
		<p>质效私服支撑常见的前端、后端&移动端的构建。下面介绍三种私服仓库。</p>
		<p>2.1 前端</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/npm-repo/</p>
		<p>npm-repo是虚拟仓库，由一个淘宝镜像远程仓库、部分本地仓库（主要是私有npm库以及一些历史迁移割接库）组成。</p>
		<p>仓库详细介绍：</p>
		<p>远程库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>代理地址</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>npm-remote-npmmirror</td>
				<td>淘宝npmjs镜像仓库</td>
				<td>https://registry.npmmirror.com</td>
			</tr>
		</table>
		<p>本地库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>用途</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>npm-private</td>
				<td>集团各BGBU公用的NPM私有仓库</td>
				<td>无</td>
			</tr>
			
		</table>
		<p>2.2 后端&移动端</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/mvn-repo/</p>
		<p>mvn-repo是虚拟仓库，由20个远程仓库、31个本地仓库及部分老私服迁移库组成。只介绍远程和本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>远程库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>代理地址</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>mvn-remote-maven.google.com</td>
				<td>google库</td>
				<td>https://dl.google.com/dl/android/maven2/</td>
			</tr>
			<tr>
				<td>2</td>
				<td>mvn-remote-epository.apache.org</td>
				<td>Apache库</td>
				<td>http://repository.apache.org/</td>
			</tr>
			<tr>
				<td>3</td>
				<td>mvn-remote-epository.jboss.org</td>
				<td>Jboss库</td>
				<td>http://repository.jboss.org/nexus/content/groups/public-jboss/</td>
			</tr>
			<tr>
				<td>4</td>
				<td>mvn-remote-maven.geo-solutions.it</td>
				<td>geo-solutions库</td>
				<td>https://maven.geo-solutions.it/</td>
			</tr>
			<tr>
				<td>5</td>
				<td>mvn-remote-repo.jenkins-ci.org</td>
				<td>jenkins库</td>
				<td>https://repo.jenkins-ci.org/public/</td>
			</tr>
			<tr>
				<td>6</td>
				<td>mvn-remote-repository.apache.org.snapshots</td>
				<td>apache-snapshot</td>
				<td>http://repository.apache.org/snapshots/</td>
			</tr>
			<tr>
				<td>7</td>
				<td>mvn-remote-repo.maven.apache.org</td>
				<td>apache-maven库</td>
				<td>https://repo.maven.apache.org/maven2/</td>
			</tr>
			<tr>
				<td>8</td>
				<td>mvn-remote-repo1.maven.org</td>
				<td>maven中央仓库</td>
				<td>https://repo1.maven.org/maven2/</td>
			</tr>
			<tr>
				<td>9</td>
				<td>mvn-remote-dl.bintray.com</td>
				<td>dl.bintray库</td>
				<td>https://dl.bintray.com/umsdk/release/</td>
			</tr>
			<tr>
				<td>10</td>
				<td>mvn-remote-oss_jfrog_org</td>
				<td>ifrog库</td>
				<td>https://oss.jfrog.org/artifactory/jfrog-dependencies</td>
			</tr>
			<tr>
				<td>11</td>
				<td>mvn-remote-nexus.pentaho.org</td>
				<td>pentaho库</td>
				<td>http://nexus.pentaho.org/content/groups/omni/</td>
			</tr>
			<tr>
				<td>12</td>
				<td>mvn-remote-repo.osgeo.org</td>
				<td>osgeo库，gis库</td>
				<td>https://repo.osgeo.org/repository/release/</td>
			</tr>
			<tr>
				<td>13</td>
				<td>mvn-remote-jitpack.io（因安全已下线代理！）</td>
				<td>jitpack库（因安全已下线代理！）</td>
				<td>https://jitpack.io/</td>
			</tr>
			<tr>
				<td>14</td>
				<td>mvn-remote-mvn.mob.com</td>
				<td>mob库</td>
				<td>https://mvn.mob.com/android/</td>
			</tr>
			<tr>
				<td>15</td>
				<td>mvn-remote-maven.aliyun.com</td>
				<td>aliyun-public库</td>
				<td>https://maven.aliyun.com/repository/public</td>
			</tr>
			<tr>
				<td>16</td>
				<td>mvn-remote-jcenter.bintray.com（21年官方已停服）</td>
				<td>jcenter库（21年官方已停服）</td>
				<td>https://jcenter.bintray.com（21年官方已停服）</td>
			</tr>
			<tr>
				<td>18</td>
				<td>mvn-remote-mvn.gt.igexin.com</td>
				<td>个推maven库</td>
				<td>http://mvn.gt.igexin.com/nexus/content/repositories/releases/</td>
			</tr>
			<tr>
				<td>19</td>
				<td>mvn-remote-developer.huawei.com.repo</td>
				<td>华为库</td>
				<td>https://developer.huawei.com/repo/</td>
			</tr>
			<tr>
				<td>20</td>
				<td>mvn-remote-mirrors.huaweicloud.com</td>
				<td>华为云sdk库</td>
				<td>https://mirrors.huaweicloud.com/repository/maven/huaweicloudsdk</td>
			</tr>
			<tr>
				<td>21</td>
				<td>mvn-remote-maven.bytedance.com</td>
				<td>字节跳动</td>
				<td>https://artifact.bytedance.com/repository/Volcengine/</td>
			</tr>
		</table>
		<p>本地私服库：</p>
		<table>
			<thead>
				<tr>
					<th>序号</th>
					<th>仓库名称</th>
					<th>所属BGBU</th>
					<th>用途</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>auto-mvn-release-private</td>
					<td>智能汽车BU</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>2</td>
					<td>auto-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>3</td>
					<td>bdsw-mvn-release-private</td>
					<td>百得思维</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>4</td>
					<td>bdsw-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>5</td>
					<td>cbg-mvn-release-private</td>
					<td>消费者BG</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>6</td>
					<td>cbg-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>7</td>
					<td>ebg-mvn-release-private</td>
					<td>教育BG</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>8</td>
					<td>ebg-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>9</td>
					<td>gy-mvn-release-private</td>
					<td>工业智能业务部</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>10</td>
					<td>gy-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>11</td>
					<td>hy-mvn-release-private</td>
					<td>核心研发平台</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>12</td>
					<td>hy-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>13</td>
					<td>ly-mvn-release-private</td>
					<td>羚羊工业</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>14</td>
					<td>ly-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>15</td>
					<td>obu-mvn-release-private</td>
					<td>运营商事业部</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>16</td>
					<td>obu-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>17</td>
					<td>plbg-mvn-release-private（已存档）</td>
					<td>政法BG（已存档）</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>18</td>
					<td>plbg-mvn-snapshot-private（已存档）</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>19</td>
					<td>sec-mvn-release-private</td>
					<td>信息安全管理部</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>20</td>
					<td>sec-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>21</td>
					<td>stc-mvn-release-private</td>
					<td>技术中心</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>22</td>
					<td>stc-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>23</td>
					<td>xxb-mvn-release-private</td>
					<td>企业信息化部</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>24</td>
					<td>xxb-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>25</td>
					<td>-mvn-release-private</td>
					<td>智慧城市BG</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>26</td>
					<td>-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>27</td>
					<td>zhyl-mvn-release-private</td>
					<td>智慧医疗BU</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>28</td>
					<td>zhyl-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>29</td>
					<td>znfw-mvn-release-private</td>
					<td>智能服务BU</td>
					<td>存储稳定版本依赖</td>
				</tr>
				<tr>
					<td>30</td>
					<td>znfw-mvn-snapshot-private</td>
					<td></td>
					<td>存储快照版本依赖</td>
				</tr>
				<tr>
					<td>31</td>
					<td>mvn-3rd-private</td>
					<td>共用</td>
					<td>存储第三方依赖</td>
				</tr>
			</tbody>
		</table>
		<p>2.3 Python</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/api/pypi/pypi-repo/simple</p>
		<p>配置命令：pip config set global.index-url https://depend.iflytek.com/artifactory/api/pypi/pypi-repo/simple</p>
		<p>pypi-repo是虚拟仓库，由3个远程仓库、2个本地仓库组成。介绍远程和本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>远程库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>代理地址</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>pypi-remote-aliyun</td>
				<td>pypi-阿里云镜像</td>
				<td>https://mirrors.aliyun.com/pypi</td>
			</tr>
			<tr>
				<td>2</td>
				<td>pypi-remote-pypi.douban.com</td>
				<td>pypi-豆瓣镜像</td>
				<td>http://pypi.douban.com</td>
			</tr>
			<tr>
				<td>3</td>
				<td>pypi-remote-pypi.tuna.tsinghua.edu.cn</td>
				<td>pypi-清华镜像</td>
				<td>https://pypi.tuna.tsinghua.edu.cn</td>
			</tr>
		</table>
		<p>本地库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>用途</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>pypi-private</td>
				<td>共用</td>
				<td>存储python私有包</td>
			</tr>
			<tr>
				<td>2</td>
				<td>hy-npm-private</td>
				<td>核心研发平台 </td>
				<td>存储python私有包</td>
			</tr>
		</table>
		<p>2.4 Conan</p>
		<p>conan是C/C++语言包管理工具</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/api/conan/conan-repo/</p>
		<p>配置命令：conan remote add conan-repo https://depend.iflytek.com/artifactory/api/conan/conan-repo/</p>
		<p>Conan-repo是一个虚拟仓库，由1个远程仓库、3个本地仓库组成。介绍远程和本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>远程库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>代理地址</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>conan-remote-conan.io</td>
				<td>Conan官方库</td>
				<td>https://conan.io</td>
			</tr>
		</table>
		<p>本地库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库介绍</th>
				<th>用途</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>conan-private</td>
				<td>共用</td>
				<td>conan私有包存储</td>
			</tr>
			<tr>
				<td>2</td>
				<td>conan-linux-private</td>
				<td>共用</td>
				<td>conan-Linux环境私有包存储</td>
			</tr>
			<tr>
				<td>3</td>
				<td>conan-win-private</td>
				<td>共用</td>
				<td>conan-windows环境私有包存储</td>
			</tr>
		</table>
		<p>2.5 Cocoapods</p>
		<p>Cocoapods是IOS/MacOS包管理工具</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/cocoapods-luck-private/</p>
		<p>没有代理cocoapods源、由1个本地仓库组成。介绍本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>本地库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库所属BGBU</th>
				<th>用途</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>cocoapods-luck-private</td>
				<td>共用</td>
				<td>存储IOS/MacOS私有包</td>
			</tr>
		</table>

		<p>2.6 Pub</p>
		<p>Dart-pub是Flutter/Dart包管理工具</p>
		<p>统一地址：https://depend.iflytek.com/artifactory/api/pub/pub-repo</p>
		<p>pub-repo虚拟仓库，由2个本地仓库组成，目前没有代理pub远程库。介绍本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>本地库：</p>
		<table>
			<thead>
			<tr>
				<th>序号</th>
				<th>仓库名称</th>
				<th>仓库所属BGBU</th>
				<th>用途</th>
			</tr>
			</thead>
			<tr>
				<td>1</td>
				<td>pub-private</td>
				<td>共用</td>
				<td>存储正式版本flutter/Dart包</td>
			</tr>
			<tr>
				<td>2</td>
				<td>pub-bate-private</td>
				<td>共用</td>
				<td>存储非正式版本flutter/Dart包</td>
			</tr>
		</table>

		<p>2.7 Conda</p>
		<p>conda是主流python包管理工具</p>
		<p>统一地址： https://depend.iflytek.com/artifactory/api/conda/conda-repo</p>
		<p>conda-repo虚拟仓库，目前conda-repo库代理两个远程库和一个本地库。介绍远程和本地仓库。</p>
		<p>仓库详细介绍：</p>
		<p>代理的conda远程库：</p>
		<table>

			<thead>
				<tr>
					<th>序号</th>
					<th>仓库名称</th>
					<th>仓库介绍</th>
					<th>代理地址</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>conda-remote-repo.anaconda.com</td>
					<td>conda官方源</td>
					<td>https://repo.anaconda.com/pkgs/main</td>
				</tr>
				<tr>
					<td>2</td>
					<td>
						<p>conda-remote-mirrors.tuna.tsinghua.edu.cn</p>
					</td>
					<td>conda清华源</td>
					<td>https://mirrors.tuna.tsinghua.edu.cn/anaconda/</td>
				</tr>
			</tbody>
		</table>
		<p>conda本地库：</p>
		<table>
			<thead>
				<tr>
					<th>序号</th>
					<th>仓库名称</th>
					<th>仓库介绍</th>
					<th>用途</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>1</td>
					<td>conda-private</td>
					<td>共用</td>
					<td>存储conda私有包</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<style>
	body {
	      font-family: Arial, sans-serif;
	      background-color: #ffffff;
	      margin: 20px;
	  }
	
	  table {
	      border-collapse: collapse;
	  }
	
	  th, td {
	      border: 1px solid black;
	      padding: 8px;
	      text-align: center;
	  }
	
	  h1, h2 {
	      color: #333;
	  }
	
	  p {
	      color: #666;
	  }
	
	  button {
	      background-color: #4285f4;
	      color: white;
	      padding: 10px 20px;
	      border: none;
	      border-radius: 4px;
	      margin-right: 10px;
	      cursor: pointer;
	  }
	
	  button:hover {
	      background-color: #2c68d7;
	  }

	  table {
      border-collapse: collapse;
      width: 100%;
      margin: 1em 0;
      font-size: 0.9em;
      font-family: sans-serif;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  
  table thead tr {
      background-color: #009879;
      color: #ffffff;
      text-align: left;
  }
  
  table th,
  table td {
      padding: 12px 15px;
  }
  
  table tbody tr {
      border-bottom: 1px solid #dddddd;
  }
  
  table tbody tr:nth-of-type(even) {
      background-color: #f3f3f3;
  }
  
  table tbody tr:last-of-type {
      border-bottom: 2px solid #009879;
  }
  
  table tbody tr.active-row {
      font-weight: bold;
      color: #009879;
  }
  
  table tbody td:nth-child(8) {
      text-align: left;
      width: 10%;
  }
</style>