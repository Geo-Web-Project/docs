# Architecture Overview

The Geo Web is an open information network. It's conceptually \(and philosophically\) similar to the World Wide Web in many ways. Just as several underlying protocols and components create the experience of "surfing the web," the Geo Web is defined with a multi-layer technology stack.

![High-level diagram of the Geo Web&apos;s core components and interfaces](../.gitbook/assets/geo-web-architecture-overview.png)

While not 100% analogous, we can compare the Geo Web stack to the more familiar web stack as a starting point for deeper technical exploration. Check out the table below to start building your mental model of the Geo Web:

<table>
  <thead>
    <tr>
      <th style="text-align:left">Function</th>
      <th style="text-align:left">Traditional Web</th>
      <th style="text-align:left">Geo Web</th>
      <th style="text-align:left">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:left">Namespace</td>
      <td style="text-align:left">Domain Name System (<a href="https://en.wikipedia.org/wiki/Domain_Name_System">DNS</a>)</td>
      <td
      style="text-align:left"><a href="smart-contracts/">Geo Web Smart Contracts</a>
        </td>
        <td style="text-align:left">
          <p><a href="smart-contracts/geo-web-coordinates.md">Geo Web coordinates</a> are
            like</p>
          <p>IP addresses. Parcels are like domain names.</p>
        </td>
    </tr>
    <tr>
      <td style="text-align:left">Namespace Lookup</td>
      <td style="text-align:left">Root name servers</td>
      <td style="text-align:left"><a href="subgraph/">Geo Web Subgraph</a>
      </td>
      <td style="text-align:left"></td>
    </tr>
    <tr>
      <td style="text-align:left">Namespace Registration</td>
      <td style="text-align:left">
        <p>Domain registrars</p>
        <p>(eg GoDaddy)</p>
      </td>
      <td style="text-align:left"><a href="../concepts/cadastre-intro.md">Cadastre</a>
      </td>
      <td style="text-align:left">
        <p>The Cadastre also includes</p>
        <p>functions similar to a CMS</p>
        <p>on the traditional web. It</p>
        <p>won&apos;t be the exclusive way</p>
        <p>to register or trade Geo Web land.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Content Transfer</td>
      <td style="text-align:left">
        <p>Hypertext Transfer</p>
        <p>Protocol (<a href="https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol">HTTP</a>)</p>
      </td>
      <td style="text-align:left"><a href="https://ipfs.io/">IPFS</a> &amp; <a href="https://filecoin.io/">Filecoin</a>
      </td>
      <td style="text-align:left">
        <p>IPFS &amp; Filecoin include</p>
        <p>content storage mechanisms</p>
        <p>&amp; are peer-to-peer.</p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Content Formatting</td>
      <td style="text-align:left">
        <p>Hypertext Markup</p>
        <p>Language (<a href="https://en.wikipedia.org/wiki/HTML">HTML</a>)</p>
      </td>
      <td style="text-align:left"><a href="https://www.ceramic.network/">Ceramic Network</a>
      </td>
      <td style="text-align:left">
        <p>Ceramic can additionally be</p>
        <p>used to define identities on the</p>
        <p>Geo Web via <a href="https://idx.xyz/">IDX</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="text-align:left">Browsing Interface</td>
      <td style="text-align:left">
        <p>Web Browsers</p>
        <p>(eg Chrome)</p>
      </td>
      <td style="text-align:left"><a href="../concepts/spatial-browsing.md">Spatial Browser</a>
      </td>
      <td style="text-align:left">
        <p>Competition across</p>
        <p>browsers will be encouraged</p>
        <p>on the Geo Web as on the WWW.</p>
      </td>
    </tr>
  </tbody>
</table>

In the remainder of this section, we'll explore these components first from a functional perspective then at a detailed technical level. This section is targeted for developers and technical users, but non-developers can benefit from this information as well.