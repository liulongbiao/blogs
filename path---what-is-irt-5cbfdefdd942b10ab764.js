webpackJsonp([0xce78180f62e7],{383:function(n,e){n.exports={data:{site:{siteMetadata:{title:"Liu Longbiao Blog",author:"Liu Longbiao"}},markdownRemark:{id:"D:/workspace/gatsby/blogs/src/pages/2018/03/what-is-irt.md absPath of file >>> MarkdownRemark",html:'<p>【译】什么是 Item Response Theory</p>\n<p>原文地址： <a href="http://www.assess.com/what-is-item-response-theory/">http://www.assess.com/what-is-item-response-theory/</a> <br/>\nBy: by Nathan Thompson, PhD</p>\n<p>Item Response Theory (IRT) 代表了心理测量学领域的一个重要创新。\n尽管已经有 50 年历史-假设从经典的 Lord and Novick (1969) 教材中『诞生』 - 它依旧没有被充分利用起来，对很多从业者而言也依旧神秘。\n因此什么是 Item Response Theory ，它为何被发明？</p>\n<p>Classical Test Theory (CTT) 约有 100 年的历史，并且依旧是最常用的，因为对特定的场景它还是很合适，并且它足够简单，可由很多没有经过心理测量学正规训练的人员来使用。\n其多数统计量仅限于均值、比率和相关度。\n然而，其简单性也意味着它缺少处理某些非常重要的测量问题的成熟度。\n以下列出其中一部分：</p>\n<ul>\n<li><strong>样本依赖</strong>： 经典统计都是样本依赖的，并且不可用于不同的样本上；\n从 IRT 导出的结果在线性转换中是非样本依赖的（即，两个不同能力水平的样本可很容易地转换到相同的尺度上）</li>\n<li><strong>测试依赖</strong>： 经典统计与某种特定的测试形式紧紧关联，并且不能很好的处理由多种形式引入的稀疏矩阵，如 linear on the fly testing（线性即时测试） 或 adaptive testing（适应性测试）</li>\n<li><strong>弱链接/均衡</strong>： CTT 有一些方式来链接多种形式，但它们对比 IRT 而言很弱</li>\n<li><strong>测量学生的范围</strong>： 经典测试适用于平均的学生，但对高或低的学生的测量不是很好；\n反之，对非常难或容易的项目的统计也很可疑</li>\n<li><strong>缺少对猜测的证明</strong>： CTT 无法证明在多选测验中的猜测</li>\n<li><strong>打分</strong>： CTT 打分不顾及项目的难度</li>\n<li><strong>适应性测试</strong>： CTT 在多数场景下不支持适应性测试</li>\n</ul>\n<h2>Item Response Theory 基础</h2>\n<p>IRT 的基础是由 <strong>item parameters</strong> 定义的数学模型。\n对二分项（那些分数为正确/错误）而言，每一项有三个参数：</p>\n<ul>\n<li><code>a</code>： 辨别参数，该项从低到高的测试差异大小的指标；通常范围为 0 到 2，其中越高越好，尽管很多项没有超过 1.0。</li>\n<li><code>b</code>： 难度参数，该项适合的应试者水平的指标；通常范围是 -3 到 3，其中 0 是一个平均应试者水平</li>\n<li><code>c</code>： 伪猜测参数，它是一个下渐进性；通常为 <code>1/k</code>，其中 <code>k</code> 为选项的数量</li>\n</ul>\n<p><img src="https://liulongbiao.github.io/blogs/images/Dichotomous-IRF-from-FastTest.png" alt="Dichotomous-IRF-from-FastTest"></p>\n<p>这些参数用于图形显示一个 <strong>项目反应函数</strong> (IRF)。\n上图为一个 IRF 的示例。这里参数 <code>a</code> 是近似的 1.0，表示是一个相当有区分度的项目。\n参数 <code>b</code> 近似于 -0.6 (曲线的中点在 x 轴上的点)， 表示是一个容易的项目；\n在平均水平下的应试者有 60% 的机会正确解答。\n参数 <code>c</code> 近似于 0.20，尽管其下限显然在图左侧之外。</p>\n<p>这些在概念上意味着什么？\n我们正试图对应试者和某个项目的交互进行建模，因此其名称为 <strong>项目反应理论</strong>。\n在标准正则分布下考虑 x 轴到 z 分数。\n具有更高能力的应试者更可能能正确地响应。\n在 +2.0 (97%) 处的某个人有 94% 的概率能够得到正确答案。\n而在 -2.0 处的某个人只有 37% 的概率。</p>\n<h2>用基础构建块进行构建</h2>\n<p>IRF 有多种用途。以下是其中一些：</p>\n<ul>\n<li>解释和提升项目性能</li>\n<li>使用最大似然或贝叶斯方法给应试者打分</li>\n<li>表单装配，包括 linear on the fly testing (LOFT)</li>\n<li>计算应试者分数的精确度</li>\n<li>电算化适应性测试(CAT) 的开发</li>\n<li>数据取证，以查找作弊者或其它问题</li>\n</ul>\n<p><img src="https://liulongbiao.github.io/blogs/images/FastTest-test-statistics-with-TIF-705x401.png" alt="FastTest-test-statistics-with-TIF"></p>\n<p>除了能用于对每个项目独立评估外，IRF 可以以多种形式进行联合来对整体测试或表单进行评估。\n两种最重要的方法是 度量的条件标准方差(CSEM) 和 测试信息函数(TIF)。\n测试信息函数更高级，其测试提供了更多关于应试者的度量信息；\n如果应试者的能力处于相对低的水平，这些应试者可能不能被精确度量。\nCSEM 与 TIF 相反，并且可用作置信区间的可解释性优势；\n一个人的分数 加或减 1.96 倍的 SEM 是其分数的 95% 置信区间。\n上图显示了我们的 <a href="http://www.assess.com/fasttest/">FastTest</a> 平台上\n表单的部分的组装过程。</p>\n<h2>一个大家族</h2>\n<p>IRT 实际上是一大族的模型，灵活地使用其参数。\n某些场景下，根据测试的类型或数据的特性，可能仅需要 <code>(a,b)</code> 两个参数或一个参数 <code>(b)</code>。\n如果存在多点项，如 Likert 评分尺度或部分信用项，模型可被扩展以包含额外的参数。</p>\n<h2>哪里学习？</h2>\n<p>更多信息，推荐教材\nItem Response Theory for Psychologists by Embretson &#x26; Riese (2000)， 它适用于对数学处理更少的兴趣的人，\n或者 de Ayala (2009) ，它有更多的数学处理。\n如果你想更加深入，可以尝试 3 卷的\n<a href="https://www.crcpress.com/Handbook-of-Item-Response-Theory-Three-Volume-Set/Linden/p/book/9781466514393">Handbook of Item Response Theory</a>，\n它由 van der Linden 编写，其中包含了一章来讨论 ASC 的 IRT 分析软件\n<a href="http://www.assess.com/xcalibre/">Xcalibre</a>。</p>',frontmatter:{title:"【译】什么是 Item Response Theory",date:"March 01, 2018"}}},pathContext:{path:"/what-is-irt/"}}}});
//# sourceMappingURL=path---what-is-irt-5cbfdefdd942b10ab764.js.map